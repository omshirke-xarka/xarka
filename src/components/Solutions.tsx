import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Landmark, CreditCard, FlaskConical, ArrowRight } from "lucide-react";
import {
    ResponsiveContainer, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line
} from "recharts";
import { DeviceMockup, MockupHeader } from "./ui/DeviceMockup";
import { useTranslation } from "react-i18next";

const infrastructureData = [
    { time: "00:00", load: 62 }, { time: "04:00", load: 45 }, { time: "08:00", load: 78 },
    { time: "12:00", load: 95 }, { time: "16:00", load: 88 }, { time: "20:00", load: 72 }, { time: "24:00", load: 65 },
];
const fintechData = [
    { category: "KYC", score: 94 }, { category: "AML", score: 87 },
    { category: "Fraud", score: 96 }, { category: "Credit", score: 78 },
];
const pharmaData = [
    { phase: "Phase I", progress: 100 }, { phase: "Phase II", progress: 78 }, { phase: "Phase III", progress: 45 },
];

const chartTooltipStyle = { backgroundColor: "rgba(15,15,15,0.9)", border: "1px solid rgba(128,128,128,0.2)", borderRadius: 8, fontSize: 11 };
const axisTickStyle = { fill: "#888", fontSize: 10 };

const SolutionDesktopChart = ({ solutionId }: { solutionId: string }) => {
    if (solutionId === "infrastructure") {
        return (
            <div className="flex flex-col h-full">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">Grid Power Load — Last 24h</p>
                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={infrastructureData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="infraGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" />
                            <XAxis dataKey="time" tick={axisTickStyle} axisLine={false} tickLine={false} />
                            <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} domain={[30, 100]} />
                            <Tooltip contentStyle={chartTooltipStyle} labelStyle={{ color: "#aaa" }} itemStyle={{ color: "#10b981" }} />
                            <Area type="monotone" dataKey="load" stroke="#10b981" strokeWidth={2} fill="url(#infraGradient)" dot={false} activeDot={{ r: 4, fill: "#10b981" }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
    if (solutionId === "fintech") {
        return (
            <div className="flex flex-col h-full">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">Risk Score Dashboard</p>
                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={fintechData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" vertical={false} />
                            <XAxis dataKey="category" tick={axisTickStyle} axisLine={false} tickLine={false} />
                            <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} domain={[60, 100]} />
                            <Tooltip contentStyle={chartTooltipStyle} labelStyle={{ color: "#aaa" }} itemStyle={{ color: "#3b82f6" }} />
                            <Bar dataKey="score" fill="#3b82f6" fillOpacity={0.8} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
    // pharma
    return (
        <div className="flex flex-col h-full">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">Clinical Trial Progress</p>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pharmaData} layout="vertical" margin={{ top: 4, right: 24, left: 8, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" horizontal={false} />
                        <XAxis type="number" tick={axisTickStyle} axisLine={false} tickLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                        <YAxis type="category" dataKey="phase" tick={axisTickStyle} axisLine={false} tickLine={false} width={60} />
                        <Tooltip contentStyle={chartTooltipStyle} labelStyle={{ color: "#aaa" }} itemStyle={{ color: "#a855f7" }} formatter={(v) => [`${v}%`, "Progress"]} />
                        <Bar dataKey="progress" fill="#a855f7" fillOpacity={0.8} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const DesktopMockupContent = ({ solutionId }: { solutionId: string }) => (
    <div className="flex flex-col h-full">
        <MockupHeader />
        <div className="flex-1 p-4">
            <SolutionDesktopChart solutionId={solutionId} />
        </div>
    </div>
);

const Solutions = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const { t } = useTranslation();

    const features = [
        {
            id: "infrastructure",
            title: t("solutions.infrastructure.title"),
            description: t("solutions.infrastructure.description"),
            icon: Landmark,
            points: [t("solutions.infrastructure.p1"), t("solutions.infrastructure.p2"), t("solutions.infrastructure.p3")],
            color: "bg-emerald-500/10 text-emerald-500",
            mockup: {
                url: "xarka.ai/infrastructure",
                sidebar: ["Grid Monitor", "IoT Devices", "Maintenance"],
                cards: ["Grid Status", "Alert Log", "Performance"],
                mainContent: t("solutions.infrastructure.mockupMain"),
            }
        },
        {
            id: "fintech",
            title: t("solutions.fintech.title"),
            description: t("solutions.fintech.description"),
            icon: CreditCard,
            points: [t("solutions.fintech.p1"), t("solutions.fintech.p2"), t("solutions.fintech.p3")],
            color: "bg-blue-500/10 text-blue-500",
            mockup: {
                url: "xarka.ai/fintech",
                sidebar: ["Risk Engine", "Compliance", "Analytics"],
                cards: ["Risk Score", "KYC Status", "Fraud Alerts"],
                mainContent: t("solutions.fintech.mockupMain"),
            }
        },
        {
            id: "pharma",
            title: t("solutions.pharma.title"),
            description: t("solutions.pharma.description"),
            icon: FlaskConical,
            points: [t("solutions.pharma.p1"), t("solutions.pharma.p2"), t("solutions.pharma.p3")],
            color: "bg-purple-500/10 text-purple-500",
            mockup: {
                url: "xarka.ai/pharma",
                sidebar: ["Research", "Trials", "Safety"],
                cards: ["Discovery Pipeline", "Trial Status", "Safety Reports"],
                mainContent: t("solutions.pharma.mockupMain"),
            }
        },
    ];

    return (
        <section id="solutions" className="section-padding bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container w-full px-6 relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">{t("solutions.sectionLabel")}</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("solutions.heading")} <span className="text-accent">{t("solutions.headingHighlight")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t("solutions.subtitle")}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Navigation/Content */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                className={`text-left p-6 rounded-2xl transition-all duration-300 border group ${activeFeature === index
                                    ? "bg-accent/5 border-accent/20 shadow-lg shadow-accent/5 scale-100"
                                    : "bg-transparent border-transparent hover:bg-white/5 scale-95 opacity-70 hover:opacity-100"
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-2 rounded-lg ${feature.color}`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className={`text-xl font-bold ${activeFeature === index ? "text-foreground" : "text-muted-foreground"}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                                <AnimatePresence>
                                    {activeFeature === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {feature.description}
                                            </p>
                                            <ul className="space-y-2 mb-4">
                                                {feature.points.map((point) => (
                                                    <li key={point} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle size={16} className="text-accent" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex text-accent font-medium items-center gap-2 text-sm group-hover:gap-3 transition-all">
                                                {t("solutions.learnMore")} <ArrowRight size={16} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Visual Composition */}
                    <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                {/* Desktop Mockup at the back */}
                                <div className="absolute top-10 left-0 w-[95%] sm:w-[90%] h-[300px] sm:h-[400px] z-10 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <DeviceMockup type="desktop" url={features[activeFeature].mockup.url} className="opacity-90 scale-[0.8] sm:scale-100 origin-left">
                                        <DesktopMockupContent solutionId={features[activeFeature].id} />
                                    </DeviceMockup>
                                </div>

                                {/* iPhone Mockup floating in front */}
                                <div className="absolute -bottom-6 sm:bottom-0 -right-2 sm:right-4 w-[200px] sm:w-[280px] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-30 scale-[0.8] sm:scale-100 origin-bottom-right">
                                    <DeviceMockup type="mobile" className="border-gray-900 shadow-2xl shadow-black/50">
                                        <div className="h-full w-full bg-background flex flex-col p-4 relative overflow-hidden">
                                            <div className="pt-8 pb-3 flex justify-between items-center">
                                                <div className="h-6 w-6 bg-accent/20 rounded-full"></div>
                                                <div className="h-4 w-4 bg-foreground/10 rounded-full"></div>
                                            </div>

                                            {/* Infrastructure mobile */}
                                            {features[activeFeature].id === "infrastructure" && (
                                                <>
                                                    <div className="h-20 mb-3">
                                                        <ResponsiveContainer width="100%" height="100%">
                                                            <LineChart data={infrastructureData}>
                                                                <Line type="monotone" dataKey="load" stroke="#10b981" strokeWidth={2} dot={false} />
                                                            </LineChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                    <div className="space-y-2">
                                                        {[{ label: "Uptime", value: "99.9%", color: "text-emerald-500" }, { label: "Active Nodes", value: "2,847", color: "text-foreground/80" }, { label: "Alerts", value: "3", color: "text-amber-500" }].map(({ label, value, color }) => (
                                                            <div key={label} className="flex items-center justify-between bg-foreground/5 rounded-lg px-3 py-2">
                                                                <span className="text-[10px] text-muted-foreground">{label}</span>
                                                                <span className={`text-xs font-bold font-mono ${color}`}>{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}

                                            {/* Fintech mobile */}
                                            {features[activeFeature].id === "fintech" && (
                                                <div className="space-y-3">
                                                    {[{ label: "KYC Score", score: 94 }, { label: "AML Check", score: 87 }, { label: "Fraud Shield", score: 96 }].map(({ label, score }) => (
                                                        <div key={label} className="bg-foreground/5 rounded-lg px-3 py-2">
                                                            <div className="flex justify-between items-center mb-1">
                                                                <span className="text-[10px] text-muted-foreground">{label}</span>
                                                                <span className="text-[10px] font-bold text-blue-500 font-mono">{score}%</span>
                                                            </div>
                                                            <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${score}%` }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Pharma mobile */}
                                            {features[activeFeature].id === "pharma" && (
                                                <div className="space-y-3">
                                                    {[{ label: "Phase I", progress: 100 }, { label: "Phase II", progress: 78 }, { label: "Phase III", progress: 45 }].map(({ label, progress }) => (
                                                        <div key={label} className="bg-foreground/5 rounded-lg px-3 py-2">
                                                            <div className="flex justify-between items-center mb-1">
                                                                <span className="text-[10px] text-muted-foreground">{label}</span>
                                                                <span className="text-[10px] font-bold text-purple-500 font-mono">{progress}%</span>
                                                            </div>
                                                            <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                                                                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${progress}%` }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="absolute bottom-8 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-foreground/10">
                                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                                                    {features[activeFeature].id === "pharma" ? t("solutions.pharma.aiResearchModule") : t("solutions.activeModule")}
                                                </div>
                                                <div className="text-white font-bold text-xs sm:text-base">
                                                    {features[activeFeature].title}
                                                </div>
                                            </div>
                                        </div>
                                    </DeviceMockup>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
