import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Smartphone, ArrowRight, Zap, Target, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Beautiful & Intuitive",
      description: "Creating stunning user interfaces that provide exceptional user experiences. From wireframes to high-fidelity designs, I focus on usability, accessibility, and aesthetic appeal.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping", 
        "Visual Design & Branding",
        "Usability Testing & Optimization"
      ],
      gradient: "bg-gradient-primary",
      price: "Starting at $500",
      popular: false
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern & Responsive",
      description: "Building responsive, high-performance websites using cutting-edge technologies. I create scalable solutions that work perfectly across all devices and browsers.",
      features: [
        "Responsive Web Design",
        "Frontend Development (React)",
        "Performance Optimization",
        "SEO & Analytics Integration"
      ],
      gradient: "bg-gradient-accent",
      price: "Starting at $800",
      popular: true
    },
    {
      icon: Smartphone,
      title: "App Development",
      subtitle: "Cross-Platform Solutions",
      description: "Developing innovative mobile and web applications that solve real-world problems. From concept to deployment, I create powerful, user-friendly applications.",
      features: [
        "Cross-platform Development",
        "API Design & Integration",
        "Database Architecture",
        "App Store Optimization"
      ],
      gradient: "bg-gradient-subtle",
      price: "Starting at $1200",
      popular: false
    }
  ];

  const processSteps = [
    { icon: Users, title: "Discovery", desc: "Understanding your needs" },
    { icon: Target, title: "Strategy", desc: "Planning the solution" },
    { icon: Code, title: "Development", desc: "Building your project" },
    { icon: Zap, title: "Launch", desc: "Delivering results" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions to help bring your ideas to life with creativity, 
            technical excellence, and attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-glow transition-all duration-700 hover:-translate-y-4 animate-fade-in bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden ${
                service.popular ? 'border-primary/50 shadow-glow scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0 px-4 py-1">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${service.gradient}`} />
              
              <CardContent className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 ${service.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">{service.subtitle}</p>
                  
                  <div className="text-3xl font-bold text-gradient mb-4">{service.price}</div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    What's Included:
                  </h4>
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 animate-slide-in"
                      style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full group-hover:scale-105 transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'bg-card hover:bg-primary hover:text-primary-foreground border border-border'
                  }`}
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-3xl font-bold mb-4">My Process</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <Card 
                key={step.title}
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  <div className="text-sm font-bold text-primary mt-2">0{index + 1}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-4xl mx-auto bg-gradient-subtle border-primary/20 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">Need Something Custom?</h3>
              <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                Every project is unique. If you have specific requirements or need a custom solution, 
                I'd love to discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-background transition-all"
                  onClick={scrollToContact}
                >
                  Schedule a Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="bg-white text-background hover:bg-white/90 border-white"
                  onClick={scrollToContact}
                >
                  Get Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;