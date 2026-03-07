import { motion } from "framer-motion";
import { Zap, Settings, Building2, ChevronRight, Gauge, Shield, Plug2, CreditCard, GitBranch, Server, Activity, TrendingUp, Lock, Key, GraduationCap, Unlink } from "lucide-react";

const pillars = [
    {
        icon: Zap,
        title: "Inference",
        def: "LLM API Access",
        desc: "Access Xarka's proprietary LLM stack via simple API calls. No infrastructure overhead, no model training, no DevOps headaches just powerful, sovereign AI on tap. Whether you're building a product, running experiments, or scaling to millions of requests, our inference layer gives you the raw capability you need without the operational complexity that usually comes with it.",
        features: [
            { icon: Gauge, text: "Low-latency API responses keep your applications fast and responsive at any scale." },
            { icon: Shield, text: "Sovereign data handling ensures your inputs and outputs never leave your jurisdiction." },
            { icon: Plug2, text: "OpenAI-compatible endpoints let you migrate existing integrations with zero code changes." },
            { icon: CreditCard, text: "Pay-as-you-go pricing means you only pay for what you use, with no upfront commitment." },
        ],
    },
    {
        icon: Settings,
        title: "PaaS",
        def: "Productivity as a Service",
        desc: "Agentic AI solutions tailored to solve specific business problems and enhance productivity across your organization. We design, deploy, manage, and continuously optimize your AI agents so you never have to think about uptime, drift, or model updates. Your team stays focused on business outcomes while we keep the intelligence running behind the scenes.",
        features: [
            { icon: GitBranch, text: "Custom agentic workflows are designed around your exact processes, not the other way around." },
            { icon: Server, text: "Managed deployment means we handle all the infrastructure so your team stays focused on outcomes." },
            { icon: Activity, text: "24/7 monitoring with proactive alerts ensures your AI systems stay reliable around the clock." },
            { icon: TrendingUp, text: "Continuous optimization keeps your agents improving as your business data and needs evolve." },
        ],
    },
    {
        icon: Building2,
        title: "BOT",
        def: "Build · Operate · Transfer",
        desc: "Full stack AI infrastructure designed, built, and deployed on your own premises. We handle everything from architecture to execution, then hand over complete ownership models, data pipelines, fine-tuned weights, and all intellectual property. After transfer, your team operates entirely independently with no ongoing dependency on Xarka, no licensing fees, and no external points of failure.",
        features: [
            { icon: Lock, text: "On-premise deployment puts the entire AI stack inside your own infrastructure and security perimeter." },
            { icon: Key, text: "Full IP ownership means every model, dataset, and workflow belongs entirely to your organization." },
            { icon: GraduationCap, text: "Team training is included so your staff can confidently operate and extend the system after handover." },
            { icon: Unlink, text: "Zero vendor lock-in guarantees you are never dependent on Xarka to keep your AI running." },
        ],
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

            <div className="flex flex-col gap-6">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-full p-10 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                <p.icon size={32} className="text-accent" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-foreground leading-none">{p.title}</h3>
                                <p className="text-lg font-medium text-accent mt-1">{p.def}</p>
                            </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{p.desc}</p>
                        <div className="flex items-center gap-3 mb-8">
                            <ChevronRight size={18} className="text-accent" />
                            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Key Highlights</span>
                            <div className="flex-1 h-px bg-accent/20" />
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {p.features.map((f) => (
                                <li key={f.text} className="flex items-start gap-3 text-base text-foreground/70 leading-relaxed">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <f.icon size={16} className="text-accent" />
                                    </div>
                                    {f.text}
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
