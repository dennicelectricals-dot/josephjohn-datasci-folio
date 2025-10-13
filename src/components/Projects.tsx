import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Skin Cancer Detection Model",
      description: "Advanced deep learning model using TensorFlow for medical image classification. Deployed as an interactive Streamlit web application for real-time cancer detection.",
      tech: ["TensorFlow", "Keras", "Streamlit", "Python", "Computer Vision"],
      github: "#",
      demo: "#",
      color: "primary",
    },
    {
      title: "Cancer Detection Web App",
      description: "Final year project combining image processing and machine learning for accurate cancer detection. Built with a focus on accessibility and user experience.",
      tech: ["Python", "ML", "Image Processing", "Web Development"],
      github: "#",
      demo: "#",
      color: "secondary",
    },
    {
      title: "Interactive Data Dashboards",
      description: "Created compelling data visualizations and interactive dashboards using Streamlit and Power BI for effective data storytelling and business insights.",
      tech: ["Streamlit", "Power BI", "Python", "Data Visualization"],
      github: "#",
      demo: "#",
      color: "primary",
    },
    {
      title: "NLP with Transformers",
      description: "Implemented state-of-the-art NLP models using Hugging Face Transformers for text classification, sentiment analysis, and language understanding tasks.",
      tech: ["Transformers", "Hugging Face", "NLP", "PyTorch", "BERT"],
      github: "#",
      demo: "#",
      color: "secondary",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const glowClass = project.color === "primary" ? "hover:shadow-neon-blue" : "hover:shadow-neon-green";
            const borderClass = project.color === "primary" ? "border-primary/20" : "border-secondary/20";
            
            return (
              <Card
                key={project.title}
                className={`bg-gradient-card border ${borderClass} p-8 shadow-card ${glowClass} transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full bg-${project.color}/10 text-${project.color} text-sm font-medium border border-${project.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-${project.color}-foreground`}
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className={`bg-${project.color} hover:bg-${project.color}/90 text-${project.color}-foreground`}
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
