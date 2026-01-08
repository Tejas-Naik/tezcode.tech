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

async function createOrder(amount, description) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        description: description || "7-Day Crash Course Trial",
        amount: {
          currency_code: "USD",
          value: amount,
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create order: ${error}`);
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
    const { product } = req.body;
    
    if (!product || !product.cost) {
      return res.status(400).json({ error: 'Missing product cost' });
    }

    const order = await createOrder(product.cost, product.description);
    
    if (order.id) {
      return res.status(200).json(order);
    } else {
      return res.status(500).json({ error: 'Failed to create order', details: order });
    }
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    return res.status(500).json({ error: 'Something went wrong', message: error.message });
  }
}

