import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Apply environment variables from .env and .env.local
dotenv.config();
dotenv.config({ path: '.env.local' });

// Verify environment variables
if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
  console.warn('WARNING: PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET not found in environment variables.');
}

import createOrderHandler from './api/orders.js';
import captureOrderHandler from './api/orders/capture.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/orders', async (req, res) => {
  try {
    await createOrderHandler(req, res);
  } catch (error) {
    console.error('Error in /api/orders:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

app.post('/api/orders/capture', async (req, res) => {
  try {
    await captureOrderHandler(req, res);
  } catch (error) {
    console.error('Error in /api/orders/capture:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Mock Next.js generic Response/Request helpers if needed
// The current handlers use res.setHeader, res.status().json(), which Express supports.
// But we might need to be careful if they use Next.js specific things. 
// Looking at the code:
// res.setHeader, res.status(200).json() -> Standard Express/Node compatible.
// req.body -> Standard Express (with body-parser/express.json()).
// req.method -> Standard.

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
  console.log(`PayPal Environment: ${process.env.PAYPAL_ENV || 'sandbox'}`);
});
