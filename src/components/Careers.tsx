import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => (
  <section id="careers" className="section-padding bg-surface-dark text-surface-dark-foreground">
    <div className="container-narrow text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Careers</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Join Us in Building the Intelligence Layer for Enterprise
        </h2>
        <p className="text-surface-dark-foreground/60 max-w-xl mx-auto mb-8 leading-relaxed">
          We're a small, fast-moving team solving meaningful problems at the intersection of AI and industry.
          If you thrive in ambiguity and want to shape a category, we want to hear from you.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover gap-2 px-8">
            View Open Roles <ArrowRight size={16} />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Careers;
