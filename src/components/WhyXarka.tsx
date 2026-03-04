import { motion } from "framer-motion";
import { Server, Cpu, ShieldCheck, Flag, Layers, Sliders, HardDrive } from "lucide-react";

const pillars = [
    {
        icon: Server,
        title: "Self-Hosted Infrastructure",
        subtitle: "Your Premises. Your Rules.",
        desc: "Complete deployment within client infrastructure—no cloud dependency. Air-gapped capability for classified and regulated environments. Full infrastructure control: hardware, network topology, scaling.",
    },
    {
        icon: Cpu,
        title: "LLM Width & Depth",
        subtitle: "Not a wrapper. An engine.",
        desc: "Proprietary models from 4Bn to 1Tn parameters—built from scratch. 3-layer stack: OCR + Embedding + Text LLM, each independently upgradeable. Multi-agentic orchestration for complex, multi-step reasoning.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        subtitle: "ISO 27001 · ISO 42001 · SOC 2 · GDPR",
        desc: "End-to-end encryption at rest and in transit with client-managed keys. Comprehensive audit trails for every inference and data access. SOC 2 Type II compliance for security, availability, and confidentiality.",
    },
    {
        icon: Flag,
        title: "Sovereign AI",
        subtitle: "India's Intelligence. India's Control.",
        desc: "100% Indian-origin AI—no foreign model dependencies. Aligned with India's National AI Strategy and data localization policies. Strategic asset for government, defense, and critical infrastructure.",
    },
    {
        icon: Layers,
        title: "Modular Architecture",
        subtitle: "Pick only what you need.",
        desc: "Deploy OCR, embeddings, text LLM, or the full stack—your choice. From single-server POC to multi-node production clusters. RESTful and gRPC APIs for seamless enterprise integration.",
    },
    {
        icon: Sliders,
        title: "Custom Fine-Tuning",
        subtitle: "Your data. Your model.",
        desc: "Domain-specific fine-tuning on proprietary data without upstream dependency. Custom training without catastrophic forgetting. Dedicated engineering team for deployment and knowledge transfer.",
    },
    {
        icon: HardDrive,
        title: "Hardware Agnostic",
        subtitle: "No hardware lock-in.",
        desc: "Runs on NVIDIA GPUs, Intel Gaudi, or custom accelerators. Scale up or down on demand—cloud, on-prem, or hybrid. Optimized inference pipelines for maximum throughput per dollar.",
    },
];

const WhyXarka = () => (
    <section id="why-xarka" className="section-padding bg-muted/20 overflow-hidden">
        <div className="container-narrow relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Xarka</p>
                <h2 className="text-3xl font-bold text-foreground mb-4">Modular. Defensible. Built Different.</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Seven pillars that make Xarka fundamentally different—composable architecture, unbreakable security, and zero vendor lock-in.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                            <p.icon size={20} className="text-accent" />
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1">{p.title}</h3>
                        <p className="text-xs font-semibold text-accent mb-2">{p.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyXarka;
