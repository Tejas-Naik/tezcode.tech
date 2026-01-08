const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

// Use sandbox for development, production for live
const base = process.env.PAYPAL_ENV === 'production' 
  ? "https://api-m.paypal.com" 
  : "https://api-m.sandbox.paypal.com";

async function generateAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to generate access token: ${error}`);
  }
  
  const data = await response.json();
  return data.access_token;
}

async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const response = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to capture payment: ${error}`);
  }

  return response.json();
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { orderID } = req.body;

    if (!orderID) {
      return res.status(400).json({ error: 'Missing orderID' });
    }

    const captureData = await capturePayment(orderID);
    
    // TODO: Save the captureData to your database
    // You can add database logic here to save the transaction
    
    return res.status(200).json(captureData);
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    return res.status(500).json({ error: 'Something went wrong', message: error.message });
  }
}

