import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Shield, Gavel, Cpu, Activity, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { DeviceMockup, MockupHeader } from "./ui/DeviceMockup";

const FeatureMockupContent = ({ mockup }: { mockup: { sidebar: string[]; cards: string[]; mainContent: string } }) => (
    <div className="flex h-full">
        <div className="w-16 md:w-48 border-r border-white/5 h-full p-4 flex flex-col gap-3">
            <div className="h-8 w-full bg-accent/10 rounded mb-4"></div>
            {mockup.sidebar.map((item, i) => (
                <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${75 - i * 15}%` }}></div>
            ))}
        </div>
        <div className="flex-1 flex flex-col">
            <MockupHeader />
            <div className="flex-1 p-6 space-y-4">
                <div className="flex gap-4 mb-8">
                    {mockup.cards.map((card, i) => (
                        <div key={i} className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 p-4">
                            <div className={`h-8 w-8 rounded-full mb-2 ${i === 0 ? "bg-accent/20" : i === 1 ? "bg-blue-500/20" : "bg-purple-500/20"}`}></div>
                            <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                        </div>
                    ))}
                </div>
                <div className="h-48 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-white/20 text-sm">
                    {mockup.mainContent}
                </div>
            </div>
        </div>
    </div>
);

const features = [
    {
        id: "legal",
        title: "Legal & Law Firms",
        description: "Streamline case management, automate document drafting, and enhance legal research with our AI-powered suite designed for modern law practices.",
        icon: Gavel,
        points: ["Automated Case Filing", "Smart Contract Analysis", "Client Portal Integration"],
        color: "bg-emerald-500/10 text-emerald-500",
        mockup: {
            url: "xarka.ai/legal",
            sidebar: ["Case Files", "Documents", "Research"],
            cards: ["Case Overview", "Contract Drafts", "Timeline"],
            mainContent: "Legal AI Dashboard"
        }
    },
    {
        id: "healthcare",
        title: "Healthcare Compliance",
        description: "Ensure HIPAA compliance and manage patient data securely. Our AI navigates complex regulatory landscapes to keep your institution protected.",
        icon: Activity,
        points: ["HIPAA Audit Logs", "Patient Data Privacy", "Regulatory Updates"],
        color: "bg-blue-500/10 text-blue-500",
        mockup: {
            url: "xarka.ai/healthcare",
            sidebar: ["Patient Records", "AI Diagnostics", "Doctor Notes", "Clinical Reports"],
            cards: ["AI Medical Insights", "Lab Results", "Prescription Tracker"],
            mainContent: "AI-Powered Patient Care & Doctor Dashboard"
        }
    },
    {
        id: "automation",
        title: "Enterprise Automation",
        description: "Reduce manual workload by 70%. Automate repetitive workflows across HR, Finance, and Operations with intelligent agents.",
        icon: Cpu,
        points: ["Workflow Orchestration", "Intelligent Document Processing", "Cross-Platform Sync"],
        color: "bg-purple-500/10 text-purple-500",
        mockup: {
            url: "xarka.ai/automation",
            sidebar: ["Workflows", "Tasks", "Integrations"],
            cards: ["Pipeline Status", "Queue Monitor", "Analytics"],
            mainContent: "Workflow Orchestration"
        }
    },
    {
        id: "robotics",
        title: "AI Robotics & Ops",
        description: "Bridge the gap between digital AI and physical operations. Manage robotic fleets and industrial IoT devices from a single dashboard.",
        icon: Shield,
        points: ["Fleet Management", "Predictive Maintenance", "IoT Security"],
        color: "bg-orange-500/10 text-orange-500",
        mockup: {
            url: "xarka.ai/robotics",
            sidebar: ["Fleet Map", "Devices", "Alerts"],
            cards: ["Live Status", "Maintenance Log", "Performance"],
            mainContent: "IoT Fleet Dashboard"
        }
    }
];

const Solutions = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="solutions" className="section-padding bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container w-full px-6 relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Solutions for <span className="text-accent">Every Industry</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From legal tech to healthcare robotics, XARKA AI adapts to your specific operational needs with precision and power.
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
                                                Learn more <ArrowRight size={16} />
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
                                        <FeatureMockupContent mockup={features[activeFeature].mockup} />
                                    </DeviceMockup>
                                </div>

                                {/* iPhone Mockup floating in front */}
                                <div className="absolute -bottom-6 sm:bottom-0 -right-2 sm:right-4 w-[200px] sm:w-[280px] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-30 scale-[0.8] sm:scale-100 origin-bottom-right">
                                    <DeviceMockup type="mobile" className="border-gray-900 shadow-2xl shadow-black/50">
                                        <div className="h-full w-full bg-background flex flex-col p-4 relative">
                                            <div className="pt-8 pb-4 flex justify-between items-center">
                                                <div className="h-8 w-8 bg-accent/20 rounded-full"></div>
                                                <div className="h-4 w-4 bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="h-24 bg-accent/5 rounded-xl mb-4 border border-accent/10 p-4 font-inter">
                                                <div className="h-4 w-1/2 bg-accent/20 rounded mb-2"></div>
                                                <div className="h-8 w-3/4 bg-white/5 rounded text-[10px]">
                                                    {features[activeFeature].id === "healthcare" ? "Dr. AI Assistant" : "Quick Actions"}
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {features[activeFeature].mockup.cards.slice(0, 3).map((card, i) => (
                                                    <div key={i} className="h-16 bg-white/5 rounded-lg flex items-center px-3 gap-2">
                                                        <div className="h-8 w-8 rounded-lg bg-accent/10 shrink-0"></div>
                                                        <div className="h-3 flex-1 bg-white/5 rounded"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="absolute bottom-8 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                                                    {features[activeFeature].id === "healthcare" ? "AI Medical Module" : "Active Module"}
                                                </div>
                                                <div className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-bold text-xs sm:text-base">
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
        </section >
    );
};

export default Solutions;
