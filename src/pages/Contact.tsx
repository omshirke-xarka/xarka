import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="section-padding bg-background border-b border-border/50">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Contact</p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Get in Touch</h1>
              <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">
                Whether you're exploring AI for your legal practice or want to schedule a demo,
                we'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-3"
              >
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                        <Input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          maxLength={100}
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          maxLength={255}
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your organization"
                        maxLength={100}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your needs..."
                        rows={5}
                        maxLength={1000}
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent-hover gap-2">
                      Send Message <Send size={16} />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Your information is kept confidential and will never be shared with third parties.
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Mail size={18} className="text-accent" /> Email
                  </h3>
                  <a href="mailto:xarka.tech@xarka.in" className="text-sm text-muted-foreground hover:text-accent transition-colors">xarka.tech@xarka.in</a>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-accent" /> Registered Office
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Govandi East, Mumbai,<br />
                    Maharashtra, India
                  </p>
                </div>

                {/* Embedded map */}
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="XARKA AI Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6!2d72.92!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAwLjAiTiA3MsKwNTUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
