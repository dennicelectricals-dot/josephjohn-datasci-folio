import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "godenaanjay@gmail.com",
      link: "mailto:godenaanjay@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09031950959",
      link: "tel:+2349031950959",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "#",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      link: "#",
      color: "secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const glowClass = info.color === "primary" ? "hover:shadow-neon-blue" : "hover:shadow-neon-green";
              const borderClass = info.color === "primary" ? "border-primary/20" : "border-secondary/20";
              const textClass = info.color === "primary" ? "text-primary" : "text-secondary";
              
              return (
                <Card
                  key={info.label}
                  className={`bg-gradient-card border ${borderClass} p-4 shadow-card ${glowClass} transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${info.color}/10`}>
                      <Icon className={`w-6 h-6 ${textClass}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className={`font-semibold ${textClass}`}>{info.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 p-8 shadow-card hover:shadow-neon-blue transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-neon-blue"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
