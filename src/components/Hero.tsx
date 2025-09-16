import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import kiranProfile from "@/assets/kiran-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: "-4s" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow opacity-75" />
            <img 
              src={kiranProfile}
              alt="Kiran Basnet - AI Student & Developer"
              className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-elegant z-10"
            />
          </div>

          {/* Main content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi! I am <br />
            <span className="text-gradient">Kiran Basnet</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            A passionate coder and AI enthusiast currently in my first year of BSc Hons AI. 
            I love coding and creating innovative solutions.
          </p>

          {/* Skills tagline */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-medium">
            {["UI/UX Design", "Web Design", "App Development", "Frontend Development"].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card rounded-full border border-border hover:border-primary transition-smooth animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-spring font-medium"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com/kiranbasnet-bit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-elegant hover:shadow-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/basnet-kiran/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-elegant hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:kirabira122@gmail.com"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth shadow-elegant hover:shadow-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce hover:text-primary transition-smooth"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;