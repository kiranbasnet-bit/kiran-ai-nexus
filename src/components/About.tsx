import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users, Award, Calendar, MapPin, Trophy } from "lucide-react";

const About = () => {
  const educationData = [
    {
      degree: "BSc Hons AI",
      institution: "Currently 1st year",
      year: "Started Nov 2024",
      status: "current",
      icon: GraduationCap,
      color: "bg-gradient-primary"
    },
    {
      degree: "SLC (12, Science)",
      institution: "Annapurna School of Science and Management",
      year: "2024",
      status: "completed",
      icon: Trophy,
      color: "bg-gradient-accent"
    },
    {
      degree: "SEE (10)",
      institution: "Annapurna Secondary School",
      year: "2022",
      status: "completed",
      icon: Award,
      color: "bg-muted"
    }
  ];

  const experiences = [
    {
      title: "NCC Campaign Volunteer",
      period: "Bhadra 2080 – Falgun 2080",
      icon: Users,
      description: "Contributed to community service initiatives and developed leadership skills",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Scout Member",
      period: "2017",
      icon: Award,
      description: "Developed teamwork, outdoor skills, and community service mindset",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    }
  ];

  const achievements = [
    { label: "Years Learning", value: "7+", icon: Calendar },
    { label: "Technologies", value: "10+", icon: Trophy },
    { label: "Projects", value: "2+", icon: Award }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Know More <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about AI and coding, I'm on a journey to create innovative solutions 
            and push the boundaries of technology.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto animate-slide-in">
          {achievements.map((achievement, index) => (
            <Card key={achievement.label} className="group hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <achievement.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-1">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Personal Story */}
          <div className="space-y-8 animate-slide-in">
            {/* Main Story Card */}
            <Card className="group shadow-elegant hover:shadow-glow transition-all duration-700 bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">My Journey</h3>
                    <p className="text-muted-foreground">From curiosity to passion</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    From a young age, I've been fascinated by the intersection of technology and human creativity. 
                    My journey into AI and programming began with curiosity about how machines can learn and adapt.
                  </p>
                  <p>
                    Today, I'm pursuing my BSc Hons in AI, diving deep into machine learning, neural networks, 
                    and the endless possibilities of artificial intelligence. Every day brings new challenges 
                    and opportunities to grow.
                  </p>
                  <p>
                    I believe in the power of code to solve real-world problems and create meaningful experiences. 
                    Whether it's building intuitive user interfaces or developing intelligent systems, 
                    I'm driven by the challenge of turning ideas into reality.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Nepal 🇳🇵</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Started Coding in 2017</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Experience & Volunteering
              </h3>
              
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl border ${exp.color}`}>
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{exp.title}</h4>
                        <p className="text-primary font-medium text-sm mb-2">{exp.period}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-primary rounded-2xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Educational Timeline</h3>
                <p className="text-muted-foreground">My academic journey</p>
              </div>
            </div>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-muted" />
              
              {educationData.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 ml-16 relative bg-card/80 backdrop-blur-sm border-border/50 ${
                    edu.status === 'current' ? 'border-primary/50 shadow-glow' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-20 top-6 w-4 h-4 ${edu.color} rounded-full border-4 border-background flex items-center justify-center`}>
                    {edu.status === 'current' && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${edu.color} rounded-lg`}>
                          <edu.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className={`${
                          edu.status === 'current' 
                            ? 'bg-primary text-primary-foreground border-0' 
                            : 'bg-muted text-muted-foreground border-border'
                        }`}>
                          {edu.year}
                        </Badge>
                        {edu.status === 'current' && (
                          <p className="text-xs text-primary mt-1 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Currently Studying
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Card className="max-w-4xl mx-auto bg-gradient-subtle border-primary/20 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
            <CardContent className="p-8 relative z-10">
              <div className="text-6xl text-primary/20 mb-4">"</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-relaxed">
                Every line of code is a step towards building the future
              </h3>
              <p className="text-white/80 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Every project is an opportunity to grow, and every challenge is a chance to innovate.
              </p>
              <div className="mt-6">
                <Badge className="bg-white/20 text-white border-white/30">
                  My Philosophy
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;