import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
          <div className="mb-4">
            <img src="/assets/LOGO_light2.png" alt="XARKA AI" className="h-14 dark:hidden" />
            <img src="/assets/LOGO_dark3.png" alt="XARKA AI" className="h-14 hidden dark:block" />
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            {t("footer.description")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => handleNavClick("/#about")} className="hover:text-accent transition-colors">{t("footer.links.solutions")}</button></li>
            <li><button onClick={() => handleNavClick("/#product")} className="hover:text-accent transition-colors">{t("footer.links.lawgicHub")}</button></li>
            <li><button onClick={() => handleNavClick("/#solutions")} className="hover:text-accent transition-colors">{t("footer.links.sectors")}</button></li>
            <li><button onClick={() => handleNavClick("/#why-xarka")} className="hover:text-accent transition-colors">{t("footer.links.whyXarka")}</button></li>
            <li><button onClick={() => handleNavClick("/#team")} className="hover:text-accent transition-colors">{t("footer.links.team")}</button></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">{t("footer.legal")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">{t("footer.privacyPolicy")}</Link></li>
            <li><Link to="/" className="hover:text-accent transition-colors">{t("footer.termsOfService")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 text-xs text-center">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
