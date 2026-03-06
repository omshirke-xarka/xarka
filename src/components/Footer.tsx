import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
  <footer className="bg-muted/50 text-muted-foreground border-t border-border">
    <div className="container-narrow px-6 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">X</span>
            </div>
            <span className="font-bold text-foreground">XARKA AI</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            XARKA AI Technologies Private Limited builds enterprise grade AI solutions for high-stakes
            sectors, headquartered in Mumbai, Maharashtra.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {/* <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li> */}
            <li><button onClick={() => handleNavClick("/#about")} className="hover:text-accent transition-colors">Solutions</button></li>
            <li><button onClick={() => handleNavClick("/#product")} className="hover:text-accent transition-colors">LawgicHub</button></li>
            <li><button onClick={() => handleNavClick("/#solutions")} className="hover:text-accent transition-colors">Sectors</button></li>
            <li><button onClick={() => handleNavClick("/#why-xarka")} className="hover:text-accent transition-colors">Why Xarka</button></li>
            <li><button onClick={() => handleNavClick("/#team")} className="hover:text-accent transition-colors">Team</button></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 text-xs text-center">
        © {new Date().getFullYear()} XARKA AI Technologies Private Limited. All rights reserved.
      </div>
    </div>
  </footer >
  );
};

export default Footer;
