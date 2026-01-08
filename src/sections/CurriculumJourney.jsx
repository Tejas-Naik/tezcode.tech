import { useState } from "react";
import { motion } from "framer-motion";

const DayCard = ({ day, title, children, isLeft }) => (
  <motion.div 
    initial={{ opacity: 0, x: 0, y: 50 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`relative flex justify-between items-center w-full mb-12 md:mb-8 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
  >
    <div className="hidden md:block w-5/12"></div>
    
    <div className="z-20 flex items-center bg-neon-blue shadow-[0_0_10px_rgba(46,242,255,0.6)] w-10 h-10 rounded-full shrink-0 md:order-1 absolute left-0 md:left-1/2 md:-ml-5">
      <h1 className="mx-auto font-black text-lg text-bg-900">{day}</h1>
    </div>
    
    <div className={`glass-card flex-1 md:flex-none md:w-5/12 px-6 py-6 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all duration-300 ml-16 md:ml-0`}>
      <h3 className="mb-2 font-bold text-white text-xl flex flex-wrap items-center gap-2 leading-tight">
        <span className="text-neon-purple whitespace-nowrap">Day {day}:</span> 
        <span className="text-white">{title}</span>
      </h3>
      <div className="text-neutral-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </motion.div>
);

const BandNameGenerator = () => {
  const [city, setCity] = useState("");
  const [pet, setPet] = useState("");
  const [bandName, setBandName] = useState("");

  const generate = () => {
    if (city && pet) {
      setBandName(`${city} ${pet}`);
    }
  };

  return (
    <div className="mt-4 p-4 bg-bg-900/50 rounded-lg border border-white/10">
      <div className="space-y-3">
        <input 
          type="text" 
          placeholder="New York" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-bg-card border border-neutral-700 rounded px-3 py-2 text-white focus:border-neon-blue focus:outline-none transition-colors text-sm"
        />
        <input 
          type="text" 
          placeholder="Rabbit" 
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          className="w-full bg-bg-card border border-neutral-700 rounded px-3 py-2 text-white focus:border-neon-blue focus:outline-none transition-colors text-sm"
        />
        <button 
          onClick={generate}
          className="w-full bg-neon-blue text-bg-900 font-bold py-2 rounded hover:bg-neon-blue/90 transition-colors text-sm"
        >
          Generate Band Name
        </button>
      </div>
      {bandName && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-neutral-400 uppercase tracking-widest">Your Band Name</p>
          <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse">
            {bandName}
          </p>
        </motion.div>
      )}
    </div>
  );
};

const HangmanVisual = () => (
   <div className="mt-4 p-4 bg-bg-900/50 rounded-lg border border-white/10 font-mono text-center">
    <div className="text-neon-blue mb-2 text-xs opacity-70">Console Output</div>
    <div className="text-white whitespace-pre font-bold">
{`  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`}
    </div>
    <div className="mt-3 text-neon-purple font-bold tracking-[0.5em] text-lg">
      P_TH_N
    </div>
    <div className="mt-2 text-xs text-green-400">
      > You Win! The word was PYTHON.
    </div>
  </div>
);

const CurriculumJourney = () => {
  return (
    <section className="relative py-20 bg-bg-900 overflow-hidden" id="curriculum">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Zero to Hero <span className="text-transparent bg-clip-text bg-neon-gradient">Timeline</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
                No fluff. Just the raw skills you need to become a developer.
            </p>
        </div>

        <div className="relative wrap overflow-hidden p-0 h-full">
          {/* Vertical Line - Left on mobile, Center on desktop */}
          <div className="absolute border-opacity-20 border-white h-full border left-5 md:left-1/2 top-0" style={{ borderWidth: '1px' }}></div>

          {/* Cards */}
          <DayCard day="1" title="The Basics & Band Name Generator" isLeft={true}>
            <p className="mb-3">Master variables, strings, and inputs. We don't just print "Hello World" — we build a real user-input app instantly.</p>
            <div className="text-xs font-mono text-neon-blue mb-2">&gt; TRY THE PROJECT:</div>
            <BandNameGenerator />
          </DayCard>

          <DayCard day="2" title="Data Types & Mathematical Operations" isLeft={false}>
            <p>Learn to manipulate numbers, type check, and handle errors. Build a <strong>Tip Calculator</strong> to handle real-world math.</p>
          </DayCard>

          <DayCard day="3" title="Control Flow & Logical Operators" isLeft={true}>
            <p>Master <code>if/else</code> statements and modulo operators. Build a text-based <strong>Treasure Island</strong> adventure game.</p>
          </DayCard>

          <DayCard day="4" title="Randomisation & Python Lists" isLeft={false}>
            <p>Learn how computers generate randomness and manage data lists. create a <strong>Rock Paper Scissors</strong> game against the AI.</p>
          </DayCard>

          <DayCard day="5" title="Loops & Password Generator" isLeft={true}>
            <p>Automate repetitive tasks with loops. Build a secure <strong>Password Generator</strong> that beats built-in tools.</p>
          </DayCard>

            <DayCard day="6" title="Functions & Karel" isLeft={false}>
            <p>Learn to structure code with custom functions. Navigate the "Reeborg's World" maze using algorithmic thinking.</p>
          </DayCard>

          <DayCard day="7" title="Capstone: The Hangman Game" isLeft={true}>
            <p>Combine EVERYTHING (loops, lists, if/else, inputs) to build a fully functional, playable Hangman game from scratch.</p>
            <HangmanVisual />
          </DayCard>

        </div>
      </div>
    </section>
  );
};

export default CurriculumJourney;
