import { motion } from "framer-motion";
import { Search, FileText, Mic, Workflow, Lock, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "AI Legal Research",
        desc: "Query case law, statutes, and legal precedents with natural language — powered by models trained on Indian legal data.",
    },
    {
        icon: FileText,
        title: "Automated Drafting",
        desc: "Generate contracts, petitions, and legal documents in minutes with intelligent templates and contextual AI.",
    },
    {
        icon: Mic,
        title: "Intelligent Transcription",
        desc: "Convert court proceedings, depositions, and meetings into accurate, searchable transcripts automatically.",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        desc: "Streamline case management, deadline tracking, and document routing with configurable automation pipelines.",
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        desc: "Bank-grade encryption, role-based access controls, and full compliance with Indian data protection standards.",
    },
];

const Product = () => (
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
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Specialized Verticals</p>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">LawgicHub</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                    Our premier legal intelligence ecosystem. A comprehensive platform designed for modern professionals
                    where every feature is purpose-built to accelerate high-stakes outcomes.
                </p>
                <div className="mt-8 flex justify-center">
                    <a
                        href="https://lawgichub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-8 py-3.5 rounded-xl font-semibold hover:bg-accent/20 transition-all group shadow-sm hover:shadow-accent/10"
                    >
                        Visit LawgicHub <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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
                                border: "6px solid transparent",
                                borderImage: "linear-gradient(180deg, #555 0%, #333 50%, #222 100%) 1",
                                boxShadow: "0 -2px 30px rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* Top bezel with camera */}
                            <div className="bg-gradient-to-b from-slate-200 to-slate-300 dark:from-gray-700 dark:to-gray-800 h-7 flex items-center justify-center relative">
                                <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-gray-900 border border-white/20 dark:border-gray-600 shadow-inner"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="bg-slate-50 dark:bg-slate-950 p-5 sm:p-8 min-h-[400px]">
                                {/* Fake browser chrome */}
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-black/5 dark:border-white/10">
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

                                {/* Feature Grid inside screen */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {features.map((f, i) => (
                                        <div
                                            key={f.title}
                                            className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                                                <f.icon size={16} className="text-accent" />
                                            </div>
                                            <h3 className="text-xs font-bold text-foreground mb-1">{f.title}</h3>
                                            <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
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
                            <div className="w-full h-full rounded-[2.2rem] bg-white dark:bg-slate-950 overflow-hidden relative border border-black/5 dark:border-white/5">
                                {/* Mobile App Header */}
                                <div className="p-6 pt-12 pb-4 border-b border-black/5 dark:border-white/5 flex flex-col gap-1">
                                    <div className="h-4 w-24 bg-accent/20 rounded"></div>
                                    <div className="h-2 w-32 bg-muted/40 rounded"></div>
                                </div>

                                {/* Mobile Feature List */}
                                <div className="p-4 space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/10 animate-pulse"></div>
                                            <div className="space-y-2 flex-1">
                                                <div className="h-3 w-3/4 bg-muted/40 rounded"></div>
                                                <div className="h-2 w-full bg-muted/20 rounded"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating Action Button */}
                                <div className="absolute bottom-8 right-6 w-12 h-12 rounded-full bg-accent shadow-lg shadow-accent/30 flex items-center justify-center">
                                    <Workflow size={20} className="text-white" />
                                </div>
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

export default Product;
