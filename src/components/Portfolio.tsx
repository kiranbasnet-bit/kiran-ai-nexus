import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers, Leaf, Calendar, Users, Trophy } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "ForgeX",
      role: "Frontend Developer",
      description: "A cutting-edge college project showcasing modern web development practices. Built with React and TypeScript, featuring a responsive design and intuitive user interface with advanced state management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Context API"],
      type: "Web Application",
      icon: Layers,
      status: "College Project",
      duration: "3 months",
      team: "4 members",
      gradient: "bg-gradient-primary",
      highlights: [
        "Responsive design implementation",
        "Modern UI/UX principles",
        "Component-based architecture",
        "Performance optimization",
        "State management with Context API"
      ],
      features: [
        "User Authentication System",
        "Real-time Data Updates",
        "Advanced Search & Filtering",
        "Dark/Light Theme Toggle"
      ],
      metrics: {
        performance: "95%",
        accessibility: "92%",
        seo: "88%"
      }
    },
    {
      title: "iSmart Garden",
      role: "Full Stack Developer",
      description: "An innovative IoT-based smart gardening solution combining hardware sensors with a sleek web interface. Monitor soil moisture, temperature, and automate watering systems remotely.",
      technologies: ["Python", "JavaScript", "IoT", "Django", "HTML/CSS", "Arduino"],
      type: "IoT Application",
      icon: Leaf,
      status: "Personal Project",
      duration: "4 months",
      team: "Solo project",
      gradient: "bg-gradient-accent",
      highlights: [
        "Real-time sensor data monitoring",
        "Automated watering system",
        "Mobile-responsive dashboard",
        "Data visualization charts",
        "IoT device integration"
      ],
      features: [
        "Soil Moisture Monitoring",
        "Temperature & Humidity Tracking",
        "Automated Irrigation Control",
        "Historical Data Analytics"
      ],
      metrics: {
        accuracy: "94%",
        uptime: "99.2%",
        efficiency: "85%"
      }
    }
  ];

  const projectStats = [
    { label: "Projects Completed", value: "2+", icon: Trophy },
    { label: "Technologies Used", value: "10+", icon: Layers },
    { label: "Total Development", value: "7mo", icon: Calendar }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            <Trophy className="w-4 h-4 mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects that showcase my passion for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto animate-slide-in">
          {projectStats.map((stat, index) => (
            <Card key={stat.label} className="group hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-glow transition-all duration-700 hover:-translate-y-2 animate-fade-in overflow-hidden bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Project Info */}
                <div className="p-8 lg:p-12 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 ${project.gradient} rounded-2xl group-hover:scale-110 transition-transform`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-primary font-semibold text-lg">{project.role}</p>
                      </div>
                    </div>
                    <Badge className="bg-muted text-muted-foreground">
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div>
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      className={`flex-1 ${project.gradient} hover:shadow-glow transition-spring text-white`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-muted/20 p-8 lg:p-12 space-y-8">
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-3 animate-slide-in"
                          style={{ animationDelay: `${(index * 0.3) + (featureIndex * 0.1)}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Highlights */}
                  <div>
                    <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      Technical Highlights
                    </h4>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlight}
                          className="flex items-center gap-3 animate-slide-in"
                          style={{ animationDelay: `${(index * 0.3) + (highlightIndex * 0.1) + 0.2}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div>
                    <h4 className="font-bold mb-4 text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-gradient">{value}</div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-4xl mx-auto bg-gradient-subtle border-primary/20 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">More Projects Coming Soon</h3>
              <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm constantly working on new projects and expanding my portfolio. 
                Stay tuned for more exciting developments in AI, web development, and IoT!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-background transition-colors"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Collaborate With Me
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-background hover:bg-white/90"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Hire Me for Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;