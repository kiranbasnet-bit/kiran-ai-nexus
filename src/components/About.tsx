import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Award } from "lucide-react";

const About = () => {
  const educationData = [
    {
      degree: "BSc Hons AI",
      institution: "Currently 1st year",
      year: "Started Nov 2024",
      status: "current"
    },
    {
      degree: "SLC (12, Science)",
      institution: "Annapurna School of Science and Management",
      year: "2024",
      status: "completed"
    },
    {
      degree: "SEE (10)",
      institution: "Annapurna Secondary School",
      year: "2022",
      status: "completed"
    }
  ];

  const experiences = [
    {
      title: "NCC Campaign Volunteer",
      period: "Bhadra 2080 – Falgun 2080",
      icon: Users,
      description: "Contributed to community service initiatives"
    },
    {
      title: "Scout Member",
      period: "2017",
      icon: Award,
      description: "Developed leadership and teamwork skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about AI and coding, I'm on a journey to create innovative solutions 
            and push the boundaries of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-8 animate-slide-in">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">My Passion</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  From a young age, I've been fascinated by the intersection of technology and human creativity. 
                  My journey into AI and programming began with curiosity about how machines can learn and adapt. 
                  Today, I'm pursuing my BSc Hons in AI, diving deep into machine learning, neural networks, 
                  and the endless possibilities of artificial intelligence.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I believe in the power of code to solve real-world problems and create meaningful experiences. 
                  Whether it's building intuitive user interfaces or developing intelligent systems, 
                  I'm driven by the challenge of turning ideas into reality.
                </p>
              </CardContent>
            </Card>

            {/* Volunteer Experience */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Volunteer & Experience</h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <exp.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <p className="text-sm text-primary font-medium">{exp.period}</p>
                        <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-primary rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Educational Journey</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-elegant transition-smooth ${
                    edu.status === 'current' ? 'border-primary shadow-glow' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'current' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.year}
                        </span>
                        {edu.status === 'current' && (
                          <p className="text-xs text-primary mt-1 font-medium">Current</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;