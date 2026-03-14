import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
  { code: "ar", label: "العربية" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { labelKey: "nav.solutions", href: "/#about" },
    { labelKey: "nav.lawgicHub", href: "/#product" },
    { labelKey: "nav.sectors", href: "/#solutions" },
    { labelKey: "nav.whyXarka", href: "/#why-xarka" },
    { labelKey: "nav.team", href: "/#team" },
    { labelKey: "nav.contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/assets/LOGO_light2.png" alt="XARKA AI" className="h-14 dark:hidden" />
          <img src="/assets/LOGO_dark3.png" alt="XARKA AI" className="h-14 hidden dark:block" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <button
                key={item.labelKey}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.labelKey)}
              </button>
            ) : (
              <Link
                key={item.labelKey}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            )
          )}
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground px-2">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{currentLang.label}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map(({ code, label }) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={`gap-2 ${i18n.language === code ? "text-accent font-semibold" : ""}`}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-4">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <button
                key={item.labelKey}
                onClick={() => handleNavClick(item.href)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.labelKey)}
              </button>
            ) : (
              <Link
                key={item.labelKey}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            )
          )}
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Language</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setMobileOpen(false);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    i18n.language === lang.code
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
