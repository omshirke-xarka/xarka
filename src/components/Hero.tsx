import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WorldBackground from "./WorldBackground";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">
            <WorldBackground />
            <div className="w-full container px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl w-full"
                >

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.2] pb-2 mb-6 text-balance tracking-tight">
                        Intelligence That{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Changes the World</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
                        XARKA AI empowers visionaries across legal, medical, and technology sectors with enterprise-grade intelligence
                        that defines the future. Experience solutions built to make a global impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-border text-foreground hover:bg-secondary/50 px-8 backdrop-blur-sm"
                            onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Explore Solutions
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
