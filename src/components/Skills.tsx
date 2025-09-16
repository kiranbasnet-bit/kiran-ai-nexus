import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Brain, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "HTML", level: 90, proficiency: "Proficient" },
        { name: "CSS", level: 85, proficiency: "Proficient" },
        { name: "Python", level: 75, proficiency: "Skilled" },
        { name: "JavaScript", level: 70, proficiency: "Skilled" },
        { name: "React", level: 65, proficiency: "Skilled" },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Brain,
      skills: [
        { name: "Django", level: 40, proficiency: "Beginner" },
        { name: "Jinja", level: 35, proficiency: "Beginner" },
        { name: "Git", level: 60, proficiency: "Skilled" },
        { name: "VS Code", level: 80, proficiency: "Proficient" },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "UI Design", level: 75, proficiency: "Skilled" },
        { name: "UX Research", level: 65, proficiency: "Skilled" },
        { name: "Prototyping", level: 70, proficiency: "Skilled" },
        { name: "Figma", level: 80, proficiency: "Proficient" },
      ]
    },
    {
      title: "Soft Skills",
      icon: Sparkles,
      skills: [
        { name: "Problem Solving", level: 85, proficiency: "Strong" },
        { name: "Creativity", level: 90, proficiency: "Strong" },
        { name: "Communication", level: 80, proficiency: "Strong" },
        { name: "Teamwork", level: 85, proficiency: "Strong" },
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency.toLowerCase()) {
      case 'proficient':
      case 'strong':
        return 'text-green-400';
      case 'skilled':
        return 'text-blue-400';
      case 'beginner':
        return 'text-yellow-400';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-gradient">Skills</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="shadow-elegant hover:shadow-glow transition-smooth animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm font-medium ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                      <div className="text-right text-xs text-muted-foreground mt-1">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Philosophy */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <Card className="bg-gradient-subtle border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Learning Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Every project is an opportunity to grow, and every challenge is a chance to innovate. 
                My approach combines technical excellence with creative problem-solving to deliver 
                solutions that are both functional and beautiful.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;