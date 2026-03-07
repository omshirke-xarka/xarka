import { motion } from "framer-motion";
import { Server, ShieldCheck, Flag, Layers, Sliders, HardDrive } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyXarka = () => {
    const { t } = useTranslation();

    const pillars = [
        {
            icon: Server,
            title: t("whyXarka.p1.title"),
            subtitle: t("whyXarka.p1.subtitle"),
            desc: t("whyXarka.p1.desc"),
        },
        {
            icon: ShieldCheck,
            title: t("whyXarka.p2.title"),
            subtitle: t("whyXarka.p2.subtitle"),
            desc: t("whyXarka.p2.desc"),
        },
        {
            icon: Flag,
            title: t("whyXarka.p3.title"),
            subtitle: t("whyXarka.p3.subtitle"),
            desc: t("whyXarka.p3.desc"),
        },
        {
            icon: Layers,
            title: t("whyXarka.p4.title"),
            subtitle: t("whyXarka.p4.subtitle"),
            desc: t("whyXarka.p4.desc"),
        },
        {
            icon: Sliders,
            title: t("whyXarka.p5.title"),
            subtitle: t("whyXarka.p5.subtitle"),
            desc: t("whyXarka.p5.desc"),
        },
        {
            icon: HardDrive,
            title: t("whyXarka.p6.title"),
            subtitle: t("whyXarka.p6.subtitle"),
            desc: t("whyXarka.p6.desc"),
        },
    ];

    return (
        <section id="why-xarka" className="section-padding bg-muted/20 overflow-hidden">
            <div className="container-narrow relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">{t("whyXarka.sectionLabel")}</p>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t("whyXarka.heading")}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t("whyXarka.subtitle")}
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
};

export default WhyXarka;
