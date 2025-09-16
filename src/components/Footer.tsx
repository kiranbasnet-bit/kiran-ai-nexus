import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kiranbasnet-bit",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/basnet-kiran/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kirabira122@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold text-gradient hover:scale-105 transition-transform inline-block"
            >
              KB
            </button>
            <p className="text-muted-foreground mt-2">
              AI Student & Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Kiran Basnet
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1 mt-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> in Nepal
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Passionate about creating innovative solutions with AI and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;