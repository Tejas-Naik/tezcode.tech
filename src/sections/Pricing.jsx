import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { trackEvent } from "../../utils/analytics";

const Pricing = () => {
  const navigate = useNavigate();
  const features = [
    "Daily live classes for 7 days",
    "Access to recordings & project assets",
    "7 mini projects + capstone demo",
    "24/7 Discord & WhatsApp support",
  ];

  const [message, setMessage] = useState("");

  // Renders errors or successful transactions on the screen.
  function Message({ content }) {
    return <p className="mt-4 text-sm text-text-muted">{content}</p>;
  }

  const createOrder = async () => {
    try {
      setMessage(""); // Clear any previous messages
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Pass the course details to the server
        body: JSON.stringify({
          product: {
            description: "7-Day Crash Course Trial",
            cost: "49.00", // The price from your UI
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create order");
      }

      const orderData = await response.json();

      if (orderData.id) {
        return orderData.id;
      }

      const errorDetail = orderData?.details?.[0];
      const errorMessage = errorDetail
        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
        : JSON.stringify(orderData);

      throw new Error(errorMessage);
    } catch (error) {
      console.error("Error creating order:", error);
      setMessage(`Could not initiate PayPal Checkout: ${error.message}`);
      throw error;
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const response = await fetch("/api/orders/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to capture payment");
      }

      const orderData = await response.json();
      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        return actions.restart();
      } else if (errorDetail) {
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else {
        trackEvent("checkout_success");
        const transaction = orderData.purchase_units[0].payments.captures[0];
        setMessage(
          `Transaction ${transaction.status}: ${transaction.id}. Thank you for your purchase!`
        );

        // Redirect to thank you page after successful payment
        setTimeout(() => {
          navigate("/thank-you", {
            state: {
              transactionId: transaction.id,
              status: transaction.status,
            },
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Error capturing payment:", error);
      setMessage(
        `Sorry, your transaction could not be processed: ${error.message}`
      );
    }
  };

  const onError = (err) => {
    console.error("PayPal error:", err);
    setMessage(`PayPal error: ${err.message || "An error occurred"}`);
  };

  const onCancel = (data) => {
    console.log("Payment cancelled:", data);
    setMessage("Payment was cancelled.");
  };

  return (
    <section id="pricing" className="py-20 bg-bg-900 text-white relative overflow-hidden">
        {/* Ambient Glow */}
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h3 className="text-4xl md:text-5xl font-black mb-4">
          Ready to <span className="text-transparent bg-clip-text bg-neon-gradient">Fix Your Grades?</span>
        </h3>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
            One price. Lifetime access. No subscriptions.
        </p>

        <div className="max-w-md mx-auto relative group">
           {/* Pulsing Gradient Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          <div className="relative bg-bg-900 rounded-3xl p-8 border border-white/10 ring-1 ring-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                  LIMITED TIME
              </div>

            <h3 className="text-xl font-bold text-white mb-2 tracking-wide uppercase text-neutral-400">
              7-Day Crash Course
            </h3>
            <div className="flex items-center justify-center gap-1 mb-6">
                 <span className="text-2xl text-neutral-500 line-through">$199</span>
                <span className="text-6xl font-black text-white tracking-tighter">$49</span>
            </div>

            <ul className="text-left space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-neutral-200 font-medium">
                  <div className="h-6 w-6 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3 text-neon-blue">
                      <CheckCircleIcon className="h-4 w-4" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <PayPalButtons
                style={{
                  shape: "rect",
                  layout: "vertical",
                  color: "gold",
                  label: "checkout",
                  height: 48,
                }}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
                onCancel={onCancel}
              />
              {message && <Message content={message} />}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p>7-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
