import { motion } from "framer-motion";

const stats = [
  { label: "Headquarters", value: "Mumbai, Maharashtra" },
];

const CompanySnapshot = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Mumbai 3D Map Background */}
    <div className="absolute inset-0 z-0">
      <img
        src="/assets/mumbai_3d_map.png"
        alt="Mumbai City 3D Map"
        className="w-full h-full object-cover opacity-50 sm:opacity-30 dark:opacity-60 sm:dark:opacity-40 grayscale"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated/80 via-surface-elevated/70 to-surface-elevated/90 dark:from-surface-elevated/70 dark:via-surface-elevated/60 dark:to-surface-elevated/80"></div>
    </div>
    <div className="container-narrow relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Company</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Company Snapshot</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
            <p className="text-lg font-bold text-foreground">{s.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanySnapshot;
