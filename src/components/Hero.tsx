import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap, Coffee } from "lucide-react";
import kiranProfile from "@/assets/kiran-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = ["UI/UX Design", "Web Design", "App Development", "Frontend Development"];
  const quickStats = [
    { icon: Code2, label: "Projects", value: "2+", color: "text-blue-400" },
    { icon: Coffee, label: "Coffee Cups", value: "∞", color: "text-amber-400" },
    { icon: Zap, label: "AI Learning", value: "24/7", color: "text-green-400" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_70%)]" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float blur-sm" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary-glow/20 rounded-full animate-float blur-sm" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: "-1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Status Badge */}
            <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2 animate-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for Projects
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block">Hi! I'm</span>
                <span className="block text-gradient animate-slide-in" style={{ animationDelay: "0.2s" }}>
                  Kiran Basnet
                </span>
              </h1>
              
              <div className="relative">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-in" style={{ animationDelay: "0.4s" }}>
                  A passionate <span className="text-primary font-semibold">AI student</span> and 
                  <span className="text-accent font-semibold"> coder</span> crafting innovative solutions 
                  with creativity and cutting-edge technology.
                </p>
              </div>
            </div>

            {/* Skills Tags with modern design */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-in" style={{ animationDelay: "0.6s" }}>
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="group relative"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
                  <span className="relative px-5 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 text-sm font-medium hover:border-primary/50 transition-all hover:scale-105">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in" style={{ animationDelay: "0.8s" }}>
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow transition-spring font-medium px-8 py-6 text-lg"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg backdrop-blur-sm bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 border-border/50"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 justify-center lg:justify-start animate-slide-in" style={{ animationDelay: "1s" }}>
              {quickStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile & Floating Cards */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Main Profile Card */}
            <Card className="relative mx-auto max-w-sm lg:max-w-md shadow-elegant hover:shadow-glow transition-all duration-700 border-border/50 backdrop-blur-sm bg-card/80">
              <CardContent className="p-8">
                {/* Profile Image with enhanced styling */}
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl animate-glow opacity-75 blur-md" />
                  <div className="absolute inset-2 bg-gradient-accent rounded-2xl opacity-50 blur-sm animate-float" />
                  <img 
                    src={kiranProfile}
                    alt="Kiran Basnet - AI Student & Developer"
                    className="relative w-full h-full object-cover rounded-2xl border-4 border-background shadow-elegant z-10"
                  />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full border-4 border-background flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Kiran Basnet</h3>
                    <p className="text-muted-foreground">BSc Hons AI Student</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {[
                      { icon: Github, href: "https://github.com/kiranbasnet-bit", color: "hover:bg-gray-700" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/basnet-kiran/", color: "hover:bg-blue-600" },
                      { icon: Mail, href: "mailto:kirabira122@gmail.com", color: "hover:bg-red-500" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.href} 
                        target={social.icon !== Mail ? "_blank" : undefined}
                        rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                        className={`p-3 bg-muted/50 rounded-xl ${social.color} hover:text-white transition-all hover:scale-110 backdrop-blur-sm`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Info Cards */}
            <Card className="absolute -top-8 -left-8 w-32 bg-gradient-primary border-0 text-white animate-float">
              <CardContent className="p-4 text-center">
                <Code2 className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs font-medium">Code Enthusiast</p>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-6 -right-6 w-36 bg-gradient-accent border-0 text-white animate-float" style={{ animationDelay: "-2s" }}>
              <CardContent className="p-4 text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs font-medium">AI Innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <button 
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wide font-medium">Scroll Down</span>
            <div className="w-px h-8 bg-border group-hover:bg-primary transition-colors" />
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;