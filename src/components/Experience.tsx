import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Experience = () => {
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
            Certifications
          </span>
        </h2>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
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
