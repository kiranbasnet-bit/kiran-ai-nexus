import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences. From wireframes to high-fidelity designs, I focus on usability and aesthetic appeal.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Building responsive, modern websites that perform flawlessly across all devices. I combine cutting-edge technologies with clean, maintainable code to deliver outstanding web experiences.",
      features: [
        "Responsive Web Design",
        "Frontend Development",
        "Performance Optimization",
        "SEO Implementation"
      ],
      gradient: "bg-gradient-accent"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing innovative mobile and web applications that solve real-world problems. From concept to deployment, I create applications that are both powerful and user-friendly.",
      features: [
        "Cross-platform Development",
        "API Integration",
        "Database Design",
        "App Store Deployment"
      ],
      gradient: "bg-gradient-subtle"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help bring your ideas to life with creativity and technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in border-border/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 animate-slide-in"
                      style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Service Note */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Looking for something specific? I also provide custom development solutions tailored to your unique requirements. 
                Let's discuss how I can help bring your vision to reality.
              </p>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-spring"
                onClick={scrollToContact}
              >
                Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;