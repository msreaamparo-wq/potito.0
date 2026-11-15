import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Section from '../components/Section.jsx';
import { CONFIG } from '../config.js';

const hearts = [8, 24, 42, 60, 78, 92];

export default function Closing() {
  return (
    <Section id="closing" className="relative overflow-hidden bg-gradient-to-b from-cream via-mist to-sky/70 text-center">
      {/* Floating hearts */}
      {hearts.map((left, i) => (
        <motion.span
          key={left}
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 ${i % 2 ? 'text-gold/60' : 'text-baby'}`}
          style={{ left: `${left}%` }}
          animate={{ y: [0, -340], opacity: [0, 1, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.9, ease: 'easeOut' }}
        >
          <Heart fill="currentColor" size={18 + (i % 3) * 6} />
        </motion.span>
      ))}

      <div className="relative z-10">
        {/* Cake */}
        <div className="relative mx-auto w-full max-w-[19rem]">
          <div className="pointer-events-none absolute -bottom-2 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-ink/15 blur-2xl" />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/cake/cake1.png`}
            alt="Shaun Matthew's first birthday cake"
            className="relative w-full object-contain drop-shadow-[0_20px_24px_rgba(36,65,95,0.18)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Message */}
        <h2 className="mx-auto mt-8 max-w-2xl font-serif text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          ONE YEAR DOWN, A LIFETIME OF LOVE TO GO!
        </h2>

        <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-gold/50" />
          <Heart size={14} className="text-gold" fill="currentColor" />
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <p className="mt-5 text-ink/75">Thank you for being part of {CONFIG.name}’s special day.</p>

        <p className="mt-6 font-serif text-lg italic text-ink">
          With love,
          <br />
          {CONFIG.name} and Family.
        </p>
      </div>
    </Section>
  );
}
