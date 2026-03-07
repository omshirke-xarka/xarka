import { motion } from "framer-motion";
import { Zap, Settings, Building2, ChevronRight, Gauge, Shield, Plug2, CreditCard, GitBranch, Server, Activity, TrendingUp, Lock, Key, GraduationCap, Unlink } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const pillars = [
        {
            icon: Zap,
            title: t("about.inference.title"),
            def: t("about.inference.def"),
            desc: t("about.inference.desc"),
            features: [
                { icon: Gauge, text: t("about.inference.f1") },
                { icon: Shield, text: t("about.inference.f2") },
                { icon: Plug2, text: t("about.inference.f3") },
                { icon: CreditCard, text: t("about.inference.f4") },
            ],
        },
        {
            icon: Settings,
            title: t("about.paas.title"),
            def: t("about.paas.def"),
            desc: t("about.paas.desc"),
            features: [
                { icon: GitBranch, text: t("about.paas.f1") },
                { icon: Server, text: t("about.paas.f2") },
                { icon: Activity, text: t("about.paas.f3") },
                { icon: TrendingUp, text: t("about.paas.f4") },
            ],
        },
        {
            icon: Building2,
            title: t("about.bot.title"),
            def: t("about.bot.def"),
            desc: t("about.bot.desc"),
            features: [
                { icon: Lock, text: t("about.bot.f1") },
                { icon: Key, text: t("about.bot.f2") },
                { icon: GraduationCap, text: t("about.bot.f3") },
                { icon: Unlink, text: t("about.bot.f4") },
            ],
        },
    ];

    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">

            <div className="container-narrow w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 w-full"
                >
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">{t("about.sectionLabel")}</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
                        {t("about.heading")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
                        {t("about.subtitle")}
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
                                <span className="text-sm font-semibold text-accent uppercase tracking-widest">{t("about.keyHighlights")}</span>
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
};

export default About;
