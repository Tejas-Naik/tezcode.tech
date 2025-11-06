/**
 * Fires a Google Analytics 4 event.
 * @param {string} eventName - The name of the event (e.g., 'hero_cta_click').
 * @param {object} [params={}] - Optional parameters to send with the event.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      ...params,
      event_category: "LandingPage", // Example category
    });
  } else {
    console.warn(
      `GA4 gtag function not found. Event "${eventName}" not tracked.`
    );
  }
};
