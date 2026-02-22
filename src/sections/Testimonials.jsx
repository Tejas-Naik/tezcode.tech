import { motion } from "framer-motion";

const testimonialsData = [
  {
    quote: "From failing assignments to acing labs — saved my semester.",
    author: "Aaron",
    role: "Computer Science Student",
    metric: "Built 7 projects",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    quote: "The live classes were a game-changer. I finally understood concepts my professor couldn't explain.",
    author: "Priya S.",
    role: "Engineering Student",
    metric: "GPA: 2.1 → 3.5",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "I was completely lost. In 7 days, I not only caught up but got ahead of my class.",
    author: "David K.",
    role: "Bootcamp Grad",
    metric: "Passed midterm with 92%",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote: "Finally a course that doesn't just teach syntax but actual problem solving.",
    author: "Marcus J.",
    role: "Self-taught Dev",
    metric: "Landed Intern Role",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "I built the Hangman game and showed it to my friends. They didn't believe I coded it!",
    author: "Sarah L.",
    role: "High School Student",
    metric: "First Python App",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    quote: "Worth every penny. The mentorship is actually real, not just a bot.",
    author: "James T.",
    role: "College Freshman",
    metric: "Fixed 10+ Bugs",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const TestimonialCard = ({ data }) => (
  <div className="w-[350px] mx-4 p-6 glass-card rounded-2xl flex-shrink-0 border border-white/5 hover:border-white/20 transition-colors h-[260px] flex flex-col justify-between">
    <div className="flex items-center gap-4 mb-4">
        <img src={data.image} alt={data.author} className="w-12 h-12 rounded-full border-2 border-neon-blue/20" />
        <div>
            <h4 className="font-bold text-white leading-none">{data.author}</h4>
            <span className="text-xs text-neutral-400">{data.role}</span>
        </div>
        <div className="ml-auto">
             <span className="bg-green-500/10 text-green-400 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold border border-green-500/20">Verified</span>
        </div>
    </div>
    <p className="text-neutral-300 text-sm mb-4 leading-relaxed">"{data.quote}"</p>
    <div className="pt-4 mt-auto border-t border-white/5 flex items-center gap-2">
        <span className="text-neon-purple text-lg">★</span>
        <span className="text-sm font-semibold text-white">{data.metric}</span>
    </div>
  </div>
);

const Marquee = ({ children, direction = "left", speed = 25 }) => {
  return (
    <div className="w-full overflow-hidden flex">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-shrink-0"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-shrink-0"
      >
        {children}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg-900 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-bg-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-bg-900 to-transparent z-10"></div>

      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Winning Circle</span>
        </h2>
        <p className="text-neutral-400 text-lg">
            Don't just take our word for it. See what happens when you stop watching tutorials and start coding.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <Marquee direction="left" speed={40}>
            {testimonialsData.map((t, i) => (
                <TestimonialCard key={`row1-${i}`} data={t} />
            ))}
        </Marquee>
        
        <Marquee direction="right" speed={45}>
            {testimonialsData.slice().reverse().map((t, i) => (
                <TestimonialCard key={`row2-${i}`} data={t} />
            ))}
        </Marquee>
      </div>

      <div className="text-center mt-16 z-20 relative">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-bg-900 font-bold hover:bg-neutral-100 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Become the Next Success Story
          </a>
      </div>
    </section>
  );
};

export default Testimonials;
