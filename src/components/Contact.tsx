import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, Send, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kirabira122@gmail.com",
      href: "mailto:kirabira122@gmail.com",
      color: "bg-red-500/20 text-red-400 border-red-500/30"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9849873946",
      href: "tel:+9779849873946",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "basnet-kiran",
      href: "https://www.linkedin.com/in/basnet-kiran/",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kiranbasnet-bit",
      href: "https://github.com/kiranbasnet-bit",
      color: "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24h", icon: Clock },
    { label: "Projects Completed", value: "2+", icon: MessageSquare },
    { label: "Client Satisfaction", value: "100%", icon: Badge }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto animate-slide-in">
          {quickStats.map((stat, index) => (
            <Card key={stat.label} className="group hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-700 bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or simply connect with fellow developers and creators. Feel free to reach out 
                  through any of the channels below.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-transparent hover:border-border/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`p-4 rounded-2xl border ${contact.color} group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability & Location */}
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-elegant bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-accent rounded-2xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Location & Availability</h3>
                      <p className="text-muted-foreground">Ready to work globally</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Currently available for projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Based in Nepal 🇳🇵</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span>Open to remote collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-700 animate-slide-in bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and I'll get back to you soon!</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 transition-all focus:ring-primary focus:ring-2 bg-background/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 transition-all focus:ring-primary focus:ring-2 bg-background/50 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-lg font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="h-12 transition-all focus:ring-primary focus:ring-2 bg-background/50 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="transition-all focus:ring-primary focus:ring-2 resize-none bg-background/50 backdrop-blur-sm"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg bg-gradient-primary hover:shadow-glow transition-spring group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  I typically respond within 24 hours. For urgent matters, feel free to call!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;