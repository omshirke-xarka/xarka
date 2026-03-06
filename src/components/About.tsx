import { motion } from "framer-motion";
import { Zap, Settings, Building2 } from "lucide-react";

const pillars = [
    {
        icon: Zap,
        title: "Inference",
        def: "LLM API Access",
        desc: "Access Xarka's proprietary LLM stack via simple API calls. No infrastructure overhead, no model training just powerful, sovereign AI on tap.",
        features: ["Low-latency API", "Sovereign data handling", "OpenAI-compatible endpoints", "Pay-as-you-go pricing"],
    },
    {
        icon: Settings,
        title: "PaaS",
        def: "Productivity as a Service",
        desc: "Agentic AI solutions tailored to solve specific business problems and enhance productivity. We deploy, manage, and optimize you focus on your business.",
        features: ["Custom agentic workflows", "Managed deployment", "24/7 monitoring", "Continuous optimization"],
    },
    {
        icon: Building2,
        title: "BOT",
        def: "Build · Operate · Transfer",
        desc: "Full stack AI infrastructure deployed on your premises. After design and execution, your team takes complete ownership models, data, and IP.",
        features: ["On-premise deployment", "Full IP ownership", "Team training included", "Zero vendor lock-in"],
    },
];

const About = () => (
    <section id="about" className="section-padding bg-background relative overflow-hidden">

        <div className="container-narrow w-full relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 w-full"
            >
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How We Work With You</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
                    Intelligence Built for Growth
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
                    Whether you're a startup, SME, or large enterprise we have the right engagement model for your stage and scale.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-8 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                <p.icon size={24} className="text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{p.title}</h3>
                        </div>
                        <p className="text-base font-medium text-accent mb-2">{p.def}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                        <ul className="mt-4 space-y-1 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default About;
