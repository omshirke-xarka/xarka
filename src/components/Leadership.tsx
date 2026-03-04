import { motion } from "framer-motion";
import { User } from "lucide-react";

const leaders = [
  {
    name: "Rajat Gupta",
    role: "Founder",
    bio: "Driving the overarching strategic direction and technological roadmap of Xarka AI Technologies. Dedicated to building defensible, sovereign AI infrastructure for the modern enterprise.",
    color: "from-accent/20 to-purple-500/20",
    accent: "text-accent",
    glow: "bg-accent/10"
  },
  {
    name: "Rishi Gupta",
    role: "Co-Founder",
    bio: "Steering the commercial and financial strategy, ensuring Xarka's complex engineering translates into scalable, high-impact business solutions across global markets.",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    glow: "bg-blue-500/10"
  },
  {
    name: "Sharad Sankaran",
    role: "Co-Founder",
    bio: "Guiding the core product architecture, innovations, and bridging the gap between deep-tech capabilities and real-world industry applications.",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
    glow: "bg-emerald-500/10"
  },
  {
    name: "Kumud Shankar",
    role: "Sales & Marketing",
    bio: "Driving market expansion, GTM strategy, and strategic enterprise partnerships. Focused on positioning Xarka's nuanced deployment models to high-value institutional clients.",
    color: "from-orange-500/20 to-yellow-500/20",
    accent: "text-orange-400",
    glow: "bg-orange-500/10"
  },
  {
    name: "Harshal Dhandrut",
    role: "AI & System",
    bio: "The architect behind the neural pathways. Leading the development, fine-tuning, and systematic integration of the 120Bn parameter Arka flagship engine.",
    color: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
    glow: "bg-pink-500/10"
  },
  {
    name: "Chandan",
    role: "Technology",
    bio: "Overseeing the robust technical infrastructure, ensuring the three-layered intelligence stack runs securely, efficiently, and remains completely hardware agnostic.",
    color: "from-violet-500/20 to-indigo-500/20",
    accent: "text-violet-400",
    glow: "bg-violet-500/10"
  },
];

const PerspectiveCard = ({ leader, index }: { leader: typeof leaders[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full cursor-pointer group"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-2 ${leader.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

      <div className="h-full w-full rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-6 flex flex-col items-center text-center overflow-hidden shadow-sm dark:shadow-none">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${leader.color} border border-black/5 dark:border-white/20 mb-4 flex items-center justify-center relative shadow-xl`}
        >
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl" />
          <User className={`w-8 h-8 ${leader.accent} relative z-10`} />
        </div>

        <h3 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors">
          {leader.name}
        </h3>
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
          {leader.role}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {leader.bio}
        </p>

        <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-black/10 dark:border-white/20 rounded-tr-md" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-l border-b border-black/10 dark:border-white/20 rounded-bl-md" />
      </div>
    </motion.div>
);

const Leadership = () => (
  <section id="team" className="section-padding relative overflow-hidden bg-background">
    <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
      }}
    />

    <div className="container-narrow relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Our Team</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">The Minds Behind the Machine</h2>
        <p className="text-muted-foreground mt-3 text-sm">Leadership & Key Innovators</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
        {leaders.map((leader, i) => (
          <PerspectiveCard key={leader.name} leader={leader} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
