import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
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
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
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
      href: "mailto:kirabira122@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9849873946",
      href: "tel:+9779849873946"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "basnet-kiran",
      href: "https://www.linkedin.com/in/basnet-kiran/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kiranbasnet-bit",
      href: "https://github.com/kiranbasnet-bit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or simply connect with fellow developers and creators. Feel free to reach out 
                  through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-accent rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Nepal 🇳🇵<br />
                  Available for remote work and collaboration
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant hover:shadow-glow transition-smooth animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-smooth focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="transition-smooth focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="transition-smooth focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-spring"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;