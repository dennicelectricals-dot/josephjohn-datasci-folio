import { Card } from "@/components/ui/card";
import { Code2, Brain, Database, LineChart, MessageSquare, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "primary",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "secondary",
      skills: ["Scikit-learn", "TensorFlow", "Keras"],
    },
    {
      title: "Data Visualization",
      icon: LineChart,
      color: "primary",
      skills: ["EDA", "Streamlit", "Power BI"],
    },
    {
      title: "AI & NLP",
      icon: MessageSquare,
      color: "secondary",
      skills: ["LLMs", "spaCy", "NLTK", "Transformers"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "primary",
      skills: ["SQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "secondary",
      skills: ["Git", "GitHub", "Jupyter", "Colab"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = category.color === "primary" ? "text-primary" : "text-secondary";
            const glowClass = category.color === "primary" ? "hover:shadow-neon-blue" : "hover:shadow-neon-green";
            
            return (
              <Card
                key={category.title}
                className={`bg-gradient-card border-border/50 p-6 shadow-card ${glowClass} transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                    <Icon className={`w-6 h-6 ${colorClass}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full bg-${category.color}/5 text-${category.color} text-sm font-medium border border-${category.color}/20`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {["Analytical Thinking", "Communication", "Teamwork", "Problem Solving"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full bg-card border border-primary/30 text-foreground font-medium hover:shadow-neon-blue transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
