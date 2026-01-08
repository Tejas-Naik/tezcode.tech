import React from "react";
import ReactDOM from "react-dom/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";
import App from "./App.jsx";

const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

if (!paypalClientId) {
  console.warn("PayPal Client ID is missing. Please add VITE_PAYPAL_CLIENT_ID to your .env.local file");
}

const initialOptions = {
  clientId: paypalClientId || "",
  currency: "USD",
  components: "buttons",
  enableFunding: "paylater,venmo,card",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {paypalClientId ? (
      <PayPalScriptProvider options={initialOptions}>
        <App />
      </PayPalScriptProvider>
    ) : (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>PayPal integration is not configured. Please add VITE_PAYPAL_CLIENT_ID to your .env.local file</p>
        <App />
      </div>
    )}
  </React.StrictMode>
);
