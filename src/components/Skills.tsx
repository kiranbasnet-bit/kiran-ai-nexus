import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Brain, Sparkles, TrendingUp, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "HTML", level: 90, proficiency: "Expert", years: "5+", icon: "🌐" },
        { name: "CSS", level: 85, proficiency: "Expert", years: "5+", icon: "🎨" },
        { name: "Python", level: 75, proficiency: "Advanced", years: "3+", icon: "🐍" },
        { name: "JavaScript", level: 70, proficiency: "Advanced", years: "2+", icon: "⚡" },
        { name: "React", level: 65, proficiency: "Intermediate", years: "1+", icon: "⚛️" },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Brain,
      gradient: "bg-gradient-accent",
      skills: [
        { name: "Django", level: 40, proficiency: "Learning", years: "<1", icon: "🚀" },
        { name: "Jinja", level: 35, proficiency: "Learning", years: "<1", icon: "🔧" },
        { name: "Git", level: 60, proficiency: "Intermediate", years: "2+", icon: "📚" },
        { name: "VS Code", level: 80, proficiency: "Advanced", years: "4+", icon: "💻" },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      gradient: "bg-gradient-subtle",
      skills: [
        { name: "UI Design", level: 75, proficiency: "Advanced", years: "3+", icon: "🎭" },
        { name: "UX Research", level: 65, proficiency: "Intermediate", years: "2+", icon: "🔍" },
        { name: "Prototyping", level: 70, proficiency: "Advanced", years: "2+", icon: "✏️" },
        { name: "Figma", level: 80, proficiency: "Advanced", years: "3+", icon: "🎯" },
      ]
    },
    {
      title: "Core Competencies",
      icon: Sparkles,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "Problem Solving", level: 85, proficiency: "Strong", years: "Life", icon: "🧩" },
        { name: "Creativity", level: 90, proficiency: "Strong", years: "Life", icon: "💡" },
        { name: "Communication", level: 80, proficiency: "Strong", years: "Life", icon: "💬" },
        { name: "Teamwork", level: 85, proficiency: "Strong", years: "5+", icon: "🤝" },
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency.toLowerCase()) {
      case 'expert':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'advanced':
      case 'strong':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'learning':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      default:
        return 'text-muted-foreground bg-muted/20 border-border';
    }
  };

  const overallStats = [
    { label: "Years Experience", value: "7+", icon: TrendingUp },
    { label: "Technologies", value: "15+", icon: Code2 },
    { label: "Skill Level", value: "75%", icon: Star }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      <div className="absolute top-40 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            <Code2 className="w-4 h-4 mr-2" />
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I use to bring innovative ideas to life.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto animate-slide-in">
          {overallStats.map((stat, index) => (
            <Card key={stat.label} className="group hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="group shadow-elegant hover:shadow-glow transition-all duration-700 hover:-translate-y-2 animate-fade-in bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${category.gradient}`} />
              
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 ${category.gradient} rounded-2xl group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">Technical proficiency</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill animate-slide-in"
                      style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <div>
                            <span className="font-semibold text-lg">{skill.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={`text-xs px-2 py-1 border ${getProficiencyColor(skill.proficiency)}`}>
                                {skill.proficiency}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{skill.years} years</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gradient">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="relative mb-2">
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Philosophy */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-5xl mx-auto bg-gradient-subtle border-primary/20 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">Continuous Learning</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Technology evolves rapidly, and I believe in staying ahead of the curve. 
                    Every project teaches me something new, and every challenge pushes me to expand my skillset.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Next.js", "TypeScript", "Cloud Computing"].map((upcoming) => (
                      <Badge key={upcoming} className="bg-white/20 text-white border-white/30">
                        📚 Learning: {upcoming}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white/60 text-sm mt-4">Always Growing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;