import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { trackEvent } from "../../utils/analytics";

const Pricing = () => {
  const features = [
    "Daily live classes for 7 days",
    "Access to recordings & project assets",
    "7 mini projects + capstone demo",
    "24/7 Discord & WhatsApp support",
  ];

  useEffect(() => {
    if (window.paypal && window.paypal.HostedButtons) {
      const container = document.getElementById("paypal-button-container");
      if (container) {
        // Clear the container before rendering to avoid PayPal SDK errors on re-render
        container.innerHTML = "";
        window.paypal
          .HostedButtons({
            hostedButtonId: "C3524266L3754",
            onApprove: () => {
              trackEvent("checkout_success");
            },
          })
          .render("#paypal-button-container");
      }
    }
    // We are intentionally not adding dependencies here to re-run this on every render,
    // ensuring the PayPal button is always present.
  }, []);

  return (
    <section id="pricing" className="py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Fix Your Grades?
        </h3>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Join the 7-Day Crash Course for a flat fee. No subscriptions, no
          hidden costs.
        </p>

        <div className="max-w-sm mx-auto mt-12 bg-card p-6 rounded-2xl text-center shadow-glow-blue border border-[rgba(255,255,255,0.03)]">
          <h3 className="text-xl font-bold text-white mb-3">
            7-Day Crash Course Trial
          </h3>
          <div className="text-4xl font-extrabold text-brand-500">$49</div>

          <ul className="mt-4 text-text-muted space-y-2 text-left max-w-xs mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div id="paypal-button-container" className="mt-6"></div>

          <p className="mt-3 text-sm text-text-muted">
            💰 7-Day Money-Back Guarantee — full refund if you don’t see value.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 border-t border-white/5 pt-4">
            <span className="text-sm text-text-muted">
              Secure checkout with
            </span>
            <img
              src="/icons/paypal.svg"
              alt="PayPal logo"
              className="h-5"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
