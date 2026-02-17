import { motion } from "framer-motion";
import { Target, Eye, Shield } from "lucide-react";

const pillars = [
    {
        icon: Target,
        title: "Our Mission",
        desc: "Transform enterprise operations through intelligent automation, making critical services faster, more accurate, and universally accessible.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        desc: "Become India's most trusted AI infrastructure provider — powering the next generation of professional practice across legal, medical, and technology sectors.",
    },
    {
        icon: Shield,
        title: "Our Promise",
        desc: "Enterprise-grade reliability, unwavering data security, and AI models purpose-built for diverse industrial frameworks.",
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
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">About</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
                    Intelligence for the Future of Enterprise
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
                    XARKA AI Technologies is an Indian AI company focused on building intelligent solutions
                    for high-stakes enterprise sectors. From legal and medical to fintech and industrial automation,
                    our technology empowers professionals with intelligent workflows that drive efficiency and precision.
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
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                            <p.icon size={24} className="text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default About;
