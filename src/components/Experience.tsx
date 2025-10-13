import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Mentor/Tutor",
      company: "Harly Innovation Hub",
      period: "2023 - Present",
      description: "Mentoring aspiring data scientists and conducting workshops on Python, machine learning, and data analysis. Helping students build real-world projects.",
      icon: Briefcase,
    },
    {
      title: "Product Manager & Head UI Designer",
      company: "Edcate",
      period: "2023",
      description: "Led product strategy and UI/UX design for an educational technology platform. Managed cross-functional teams and delivered user-centric solutions.",
      icon: Briefcase,
    },
    {
      title: "Intern",
      company: "nHub Foundation",
      period: "2022 - 2023",
      description: "Gained hands-on experience in software development and data analysis. Contributed to various tech projects and learned industry best practices.",
      icon: Briefcase,
    },
  ];

  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Federal University Lafia",
      period: "2019 - 2024",
      description: "Focused on artificial intelligence, machine learning, and software engineering. Final year project: Cancer Detection Web Application.",
    },
  ];

  const certifications = [
    "Hugging Face Transformers & LLMs (2025)",
    "Python for Data Science & AI - IBM (2024)",
    "Machine Learning with Python - IBM (2024)",
    "Cisco Cybersecurity (2020)",
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Experience & Education
          </span>
        </h2>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={exp.title}
                  className="bg-gradient-card border-border/50 p-6 shadow-card hover:shadow-neon-blue transition-all duration-300 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-primary/30" />
                  )}
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-secondary" />
            Education
          </h3>
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="bg-gradient-card border-border/50 p-6 shadow-card hover:shadow-neon-green transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-secondary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={cert}
                className="bg-gradient-card border-border/50 p-4 shadow-card hover:shadow-neon-blue transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
