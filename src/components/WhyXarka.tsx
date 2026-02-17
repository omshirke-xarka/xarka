import { motion } from "framer-motion";
import { ShieldCheck, Server, Database } from "lucide-react";
import { ScrollVelocityStrip } from "./ui/scroll-velocity-strip";

const WhyXarka = () => (
    <section className="section-padding bg-muted/20 overflow-hidden">
        <div className="container-narrow text-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose XARKA AI?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    We combine <span className="text-accent font-semibold">Trusted</span>, cutting-edge AI technology with deep industrial expertise to deliver solutions that truly make a difference.
                </p>

                {/* ISO & Self-Hosted Badges */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2 bg-background/50 border border-border px-4 py-2 rounded-full shadow-sm">
                        <ShieldCheck className="text-accent w-5 h-5" />
                        <span className="text-sm font-medium">ISO Certified</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/50 border border-border px-4 py-2 rounded-full shadow-sm">
                        <Server className="text-accent w-5 h-5" />
                        <span className="text-sm font-medium">Self-Hosted LLM</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/50 border border-border px-4 py-2 rounded-full shadow-sm">
                        <Database className="text-accent w-5 h-5" />
                        <span className="text-sm font-medium">Data Sovereignty</span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Scroll Velocity Strip */}
        <div className="w-full mt-12">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Trusted by Technology Partners</p>
            <ScrollVelocityStrip
                velocity={15}
                items={[
                    <div key="microsoft" className="flex items-center gap-3 px-4">
                        <svg viewBox="0 0 21 21" className="w-6 h-6 shrink-0"><rect x="0" y="0" width="10" height="10" fill="#F25022" /><rect x="11" y="0" width="10" height="10" fill="#7FBA00" /><rect x="0" y="11" width="10" height="10" fill="#00A4EF" /><rect x="11" y="11" width="10" height="10" fill="#FFB900" /></svg>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">Microsoft Certified</span>
                    </div>,
                    <div key="google" className="flex items-center gap-3 px-4">
                        <span className="text-2xl font-bold whitespace-nowrap"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">Cloud Partner</span>
                    </div>,
                    <div key="apple" className="flex items-center gap-3 px-4">
                        <svg viewBox="0 0 384 512" className="w-5 h-6 shrink-0 fill-foreground/80"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">iOS Dev</span>
                    </div>,
                    <div key="github" className="flex items-center gap-3 px-4">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-foreground/80"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">Developer Tools</span>
                    </div>,
                    <div key="aws" className="flex items-center gap-3 px-4">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#FF9900]"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.288a.596.596 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z" /></svg>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">AWS Partner</span>
                    </div>,
                    // <div key="vscode" className="flex items-center gap-3 px-4">
                    //     <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#007ACC]"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg>
                    //     <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">VSCode</span>
                    // </div>,
                    <div key="android" className="flex items-center gap-3 px-4">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-[#3DDC84]"><path d="M17.523 15.34a1 1 0 01-.992-1.005 1 1 0 011.005-.993 1 1 0 01.993 1.005 1 1 0 01-1.006.993zm-11.046 0a1 1 0 01-.993-1.005 1 1 0 011.006-.993 1 1 0 01.993 1.005 1 1 0 01-1.006.993zm11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.567.152l-2.024 3.505A12.2 12.2 0 0012 7.996a12.2 12.2 0 00-5.136 1.054L4.84 5.445a.416.416 0 00-.567-.152.416.416 0 00-.152.567l1.997 3.46C2.688 11.186.343 14.654 0 18.7h24c-.344-4.046-2.688-7.514-6.118-9.38z" /></svg>
                        <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">Android Developer</span>
                    </div>,
                ]}
            />
        </div>
    </section>
);

export default WhyXarka;
