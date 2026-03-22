import { motion } from "framer-motion";
import { useState, useRef } from "react";

const testimonialsData = [
  {
    name: "Yusuf",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    review:
      "The classes are really engaging and fun. I actually started understanding concepts better than my school classes, and I feel more confident while coding now. The way everything is explained makes learning Python easy and enjoyable.",
  },
  {
    name: "Diana",
    country: "UAE",
    flag: "🇦🇪",
    review:
      "Very well structured and organized classes. Concepts are explained clearly and in a way that's easy to understand. The sessions are also enjoyable, which makes it easier to stay consistent while learning.",
  },
  {
    name: "Ashay Chintawar",
    country: "United Kingdom",
    flag: "🇬🇧",
    review:
      "I have learned a lot through these sessions. The teaching style is simple, practical, and very effective. Complex topics are broken down into easy steps, which helped me gain confidence in programming.",
  },
  {
    name: "Yousuf Ahmad",
    country: "Egypt",
    flag: "🇪🇬",
    review:
      "The classes are very interactive and engaging. I enjoy learning a lot, and the explanations are clear and easy to follow. It made coding feel much less intimidating.",
  },
  {
    name: "Leen Mohannad",
    country: "UAE",
    flag: "🇦🇪",
    review:
      "The sessions are enjoyable and very easy to understand. The teaching approach is practical, and the experience makes learning coding much smoother for beginners.",
  },
  {
    name: "Ali Ijlal Amin",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    review:
      "Great teaching style. Every doubt is answered clearly, and concepts are explained in detail. It helped me improve a lot in coding and understand how things actually work.",
  },
  {
    name: "Aaron",
    country: "Netherlands",
    flag: "🇳🇱",
    review:
      "Very interactive and engaging sessions. The lessons are actually useful and practical, not just theory. I was able to apply what I learned immediately.",
  },
  {
    name: "Afsa Amity",
    country: "Bangladesh",
    flag: "🇧🇩",
    review:
      "The teaching is clear and easy to follow. The classes are also fun, which makes learning enjoyable and less stressful. It helped me stay consistent.",
  },
  {
    name: "Khalid Alrefai",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    review:
      "Clear explanations and enjoyable sessions. The teaching style makes it easy to understand even difficult topics.",
  },
  {
    name: "Sameera Fathima",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    review:
      "One of the best learning experiences I've had. The sessions are engaging, and the way concepts are explained makes everything simple and easy to grasp.",
  },
  {
    name: "Anonymous Student",
    country: "UAE",
    flag: "🇦🇪",
    review:
      "Very friendly and supportive teaching style. Concepts are explained clearly, and the classes are always engaging and enjoyable.",
  },
  {
    name: "Faisal Alhomsi",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    review:
      "The classes are very interactive and fun. I stayed engaged throughout and was able to understand concepts much faster than before.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-base">
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ data }) => (
  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-blue/20 transition-all duration-300 flex flex-col h-full">
    <Stars />
    <p className="text-neutral-300 text-sm leading-relaxed mb-5 flex-1">
      "{data.review}"
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-white/10 flex items-center justify-center text-lg font-bold text-white shrink-0">
        {data.name[0]}
      </div>
      <div>
        <p className="font-semibold text-white text-sm leading-none mb-1">
          {data.name}
        </p>
        <p className="text-xs text-neutral-500">
          {data.flag} {data.country}
        </p>
      </div>
    </div>
  </div>
);

// Mobile Carousel
const MobileCarousel = () => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setActive((a) => (a === 0 ? testimonialsData.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonialsData.length - 1 ? 0 : a + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden"
      >
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <TestimonialCard data={testimonialsData[active]} />
        </motion.div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-neon-blue w-5" : "bg-white/20"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-white/10 hover:border-neon-blue/30 text-white/60 hover:text-neon-blue transition-all"
        >
          ←
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full border border-white/10 hover:border-neon-blue/30 text-white/60 hover:text-neon-blue transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-900 overflow-hidden relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-bg-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-bg-900 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <span className="text-neon-blue font-mono text-sm tracking-widest mb-4 block uppercase">
          // STUDENT REVIEWS
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Trusted by Students{" "}
          <span className="text-transparent bg-clip-text bg-neon-gradient">
            Worldwide
          </span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Trusted by students from UAE, Saudi Arabia, UK, Netherlands,
          Bangladesh and more — all walks of life, one goal.
        </p>
      </div>

      {/* Mobile: Carousel */}
      <div className="container mx-auto px-6 relative z-20">
        <MobileCarousel />
      </div>

      {/* Desktop: 3-column grid */}
      <div className="container mx-auto px-6 relative z-20 hidden md:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <TestimonialCard data={t} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-14 z-20 relative">
        <a
          href="#pricing"
          className="inline-flex items-center px-8 py-4 rounded-full bg-white text-bg-900 font-bold hover:bg-neutral-100 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Join the Next Batch →
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
