import { motion } from "framer-motion";
import { User } from "lucide-react";

const leaders = [
  {
    name: "Rishi Premsagar Gupta",
    role: "Director",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    glow: "bg-blue-500/10"
  },
  {
    name: "Sharad Sankaran",
    role: "Director",
    color: "from-accent/20 to-purple-500/20",
    accent: "text-accent",
    glow: "bg-accent/10"
  },
];

const PerspectiveCard = ({ leader, index }: { leader: typeof leaders[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-64 w-full cursor-pointer group"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-2 ${leader.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

      <div className="h-full w-full rounded-2xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden shadow-sm dark:shadow-none">
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${leader.color} border border-black/5 dark:border-white/20 mb-6 flex items-center justify-center relative shadow-xl`}
        >
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl" />
          <User className={`w-10 h-10 ${leader.accent} relative z-10`} />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
          {leader.name}
        </h3>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          {leader.role}
        </p>

        <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-black/10 dark:border-white/20 rounded-tr-md" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-black/10 dark:border-white/20 rounded-bl-md" />
      </div>
    </motion.div>
);

const Leadership = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    {/* 3D Background Grid/Floor */}
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
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Leadership</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Our Leadership</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
        {leaders.map((leader, i) => (
          <PerspectiveCard key={leader.name} leader={leader} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
