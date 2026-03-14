import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Product = () => {
    const { t } = useTranslation();

    return (
    <section id="product" className="section-padding relative overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src="/assets/judiciary_bg.png"
                alt="Judiciary Background"
                className="w-full h-full object-cover opacity-5 dark:opacity-10"
                loading="lazy"
                decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        <div className="container-narrow relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20 text-center"
            >
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">{t("product.sectionLabel")}</p>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">{t("product.heading")}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                    {t("product.subtitle")}
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-4">
                    {[
                        { value: "20Mn+", label: t("product.stat1Label") },
                        { value: "50K+", label: t("product.stat2Label") },
                        { value: "95%", label: t("product.stat3Label") },
                        { value: "10x", label: t("product.stat4Label") },
                    ].map((stat) => (
                        <div key={stat.label} className="p-4 rounded-xl border border-border/50 bg-card/40 text-center">
                            <p className="text-2xl font-extrabold text-accent">{stat.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-center">
                    <a
                        href="https://lawgichub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-8 py-3.5 rounded-xl font-semibold hover:bg-accent/20 transition-all group shadow-sm hover:shadow-accent/10"
                    >
                        {t("product.visitBtn")} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>

            {/* Multi-Device 3D Mockup Container */}
            <div className="relative mx-auto max-w-5xl w-full px-4 sm:px-0">
                <div className="relative flex flex-col lg:flex-row items-end justify-center gap-12 lg:gap-0" style={{ perspective: "2000px" }}>

                    {/* 3D Laptop Mockup — Theme Aware */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full lg:w-[85%] z-10 origin-bottom"
                        style={{
                            transform: "rotateX(2deg) rotateY(2deg) scale(var(--laptop-scale, 1))",
                            transformStyle: "preserve-3d",
                            // @ts-ignore
                            "--laptop-scale": "0.85", // Default for mobile
                        }}
                    >
                        <div
                            className="relative rounded-t-2xl overflow-hidden"
                            style={{
                                // border: "6px solid transparent",
                                borderImage: "linear-gradient(180deg, #555 0%, #333 50%, #222 100%) 1",
                                boxShadow: "0 -2px 30px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* Top bezel with camera */}
                            <div className="bg-gradient-to-b from-slate-200 to-slate-300 dark:from-gray-700 dark:to-gray-800 h-7 flex items-center justify-center relative">
                                <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-gray-900 border border-white/20 dark:border-gray-600 shadow-inner"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="bg-slate-50 dark:bg-slate-950 min-h-[400px] overflow-hidden">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-4 py-2 border-b border-black/5 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg px-4 py-1.5 text-[10px] text-muted-foreground flex items-center gap-2">
                                            <Lock size={10} className="text-green-500" />
                                            <span>lawgichub.com</span>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="/assets/Lawgichub Website White.png"
                                    alt="LawgicHub Website"
                                    className="w-full h-full object-cover object-top block dark:hidden"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="/assets/Lawgichub Website Black.png"
                                    alt="LawgicHub Website"
                                    className="w-full h-full object-cover object-top hidden dark:block"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        {/* Laptop Base */}
                        <div className="relative" style={{ transform: "rotateX(-3deg)", transformOrigin: "top center" }}>
                            <div className="h-2.5 bg-gradient-to-b from-slate-400 to-slate-500 dark:from-gray-600 dark:to-gray-700 mx-[3%]"
                                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.2)" }}></div>
                            <div className="h-4 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-gray-700 dark:to-gray-800 rounded-b-xl mx-[-1%] shadow-xl shadow-black/10 dark:shadow-black/40">
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-black/10 dark:bg-gray-600/40"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D iPhone Mockup — Theme Aware */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative w-[220px] sm:w-[280px] -mt-10 sm:mt-0 lg:-ml-16 z-20 origin-top sm:origin-center"
                        style={{
                            transform: "rotateX(4deg) rotateY(-8deg) translateZ(50px) scale(var(--phone-scale, 1))",
                            transformStyle: "preserve-3d",
                            // @ts-ignore
                            "--phone-scale": "0.75", // Scale down on mobile
                        }}
                    >
                        {/* Phone Frame */}
                        <div className="relative rounded-[3rem] p-3 bg-slate-800 dark:bg-gray-900 shadow-2xl overflow-hidden border-[8px] border-slate-700 dark:border-gray-800 h-[560px]">
                            {/* Dynamic Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-slate-800 dark:bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center gap-3">
                                <div className="w-10 h-1 rounded-full bg-slate-700 dark:bg-gray-800"></div>
                                <div className="w-2 h-2 rounded-full bg-blue-500/30"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden border border-black/5 dark:border-white/5 flex flex-col">
                                {/* Mobile browser chrome */}
                                <div className="flex items-center gap-2 px-3 py-2 pt-8 bg-slate-100 dark:bg-slate-900 border-b border-black/5 dark:border-white/10 shrink-0">
                                    <div className="flex-1">
                                        <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full px-3 py-1 text-[9px] text-muted-foreground flex items-center gap-1.5">
                                            <Lock size={8} className="text-green-500 shrink-0" />
                                            <span>lawgichub.com</span>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="/assets/Lawgichub Mobile White.png"
                                    alt="LawgicHub Mobile"
                                    className="w-full flex-1 object-cover object-top block dark:hidden"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src="/assets/Lawgichub Mobile Black.png"
                                    alt="LawgicHub Mobile"
                                    className="w-full flex-1 object-cover object-top hidden dark:block"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute -left-[10px] top-[100px] w-1 h-12 bg-slate-700 dark:bg-gray-800 rounded-l-md"></div>
                            <div className="absolute -right-[10px] top-[140px] w-1 h-20 bg-slate-700 dark:bg-gray-800 rounded-r-md"></div>
                        </div>
                    </motion.div>

                    {/* Ground Shadows */}
                    <div className="absolute -bottom-10 left-[10%] right-[10%] h-12 bg-slate-900/5 dark:bg-accent/5 blur-3xl rounded-full pointer-events-none"></div>
                    <style>{`
                        @media (min-width: 640px) {
                            #product [style*="--laptop-scale"] { --laptop-scale: 1 !important; }
                            #product [style*="--phone-scale"] { --phone-scale: 1 !important; }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Product;
