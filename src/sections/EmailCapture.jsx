import { useState } from "react";
import { motion } from "framer-motion";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      // Send to existing backend /api/subscribe if available, else mailto fallback
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:tejas@tezcode.info?subject=Python Roadmap Request&body=Please send me the free Python roadmap. My email: ${email}`;
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section id="email-capture" className="py-24 bg-bg-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center glass-card rounded-3xl p-10 md:p-14 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
            // NOT READY YET?
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Get Your Free{" "}
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Python Roadmap
            </span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Not ready to enroll yet? That's okay. Get a free Python learning
            roadmap + course updates straight to your inbox.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-8"
            >
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-neon-blue font-bold text-xl">
                You're on the list!
              </p>
              <p className="text-neutral-400 mt-2">
                We'll send the roadmap to your inbox shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 bg-bg-card border border-white/10 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/30 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-7 py-3.5 bg-neon-blue text-bg-900 font-bold rounded-full hover:bg-white transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap text-sm shadow-neon-blue"
              >
                {status === "loading" ? "Sending..." : "Get Free Guide"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <p className="text-neutral-600 text-xs mt-5">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
