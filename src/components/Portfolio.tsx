import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers, Leaf } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "ForgeX",
      role: "Frontend Developer",
      description: "A cutting-edge college project showcasing modern web development practices. Built with React and TypeScript, featuring a responsive design and intuitive user interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      type: "Web Application",
      icon: Layers,
      status: "College Project",
      highlights: [
        "Responsive design implementation",
        "Modern UI/UX principles",
        "Component-based architecture",
        "Performance optimization"
      ]
    },
    {
      title: "iSmart Garden",
      role: "Full Stack Developer",
      description: "An innovative IoT-based smart gardening solution that combines hardware sensors with a sleek web interface to monitor and manage garden conditions remotely.",
      technologies: ["Python", "JavaScript", "IoT", "Django", "HTML/CSS"],
      type: "IoT Application",
      icon: Leaf,
      status: "Personal Project",
      highlights: [
        "Real-time sensor data monitoring",
        "Automated watering system",
        "Mobile-responsive dashboard",
        "Data visualization charts"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Portfolio</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects that showcase my passion for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="relative p-8 bg-gradient-subtle">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-2xl">
                        <project.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-primary-glow font-medium">{project.role}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlight}
                          className="flex items-center gap-3 animate-slide-in"
                          style={{ animationDelay: `${(index * 0.2) + (highlightIndex * 0.1)}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-spring"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">More Projects Coming Soon</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm constantly working on new projects and expanding my portfolio. 
                Stay tuned for more exciting developments!
              </p>
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-background transition-colors"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;