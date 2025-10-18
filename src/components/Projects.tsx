import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import desightsAiImage from "@/assets/desights-ai.jpeg";
import pladaAiImage from "@/assets/plada-ai.jpeg";
import cancerDetectorImage from "@/assets/cancer-detector.jpeg";
import customerChurnImage from "@/assets/customer-churn.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Desights AI Prediction",
      description: "Building a model to forecast the Federal Reserve's interest rate decisions, classifying it into one of five possible rate changes: -0.50%, -0.25%, 0%, +0.25%, or +0.50%.",
      tech: ["Machine Learning", "Python", "Financial Forecasting", "Data Analysis"],
      github: "https://github.com/Iamkvng01/Desights-AI-Prediction",
      color: "primary",
      image: desightsAiImage,
    },
    {
      title: "PladaAI - Plagiarism Detector",
      description: "User-friendly web app designed to detect and prevent plagiarism in academic assignments. Leveraging machine learning, NLP, and a grammar semantics hybrid method for real-time plagiarism detection.",
      tech: ["Machine Learning", "NLP", "Python", "Web Development"],
      github: "https://github.com/Iamkvng01/Plagiarism-Detector",
      color: "secondary",
      image: pladaAiImage,
    },
    {
      title: "Cancer Detector using Images",
      description: "Streamlit-based skin cancer detection system using deep learning (Xception CNN model) to classify skin lesions into 9 different classes. Trained on dermatological image datasets for early diagnosis.",
      tech: ["TensorFlow", "Xception", "Streamlit", "Deep Learning", "Computer Vision"],
      github: "https://github.com/Iamkvng01/Cancer-Detector",
      color: "primary",
      image: cancerDetectorImage,
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning project that predicts whether a customer will churn or stay, based on their profile and service usage data. Demonstrates end-to-end Data Science workflow with Streamlit deployment.",
      tech: ["Machine Learning", "Python", "Streamlit", "Data Analysis", "Scikit-learn"],
      github: "https://github.com/Iamkvng01/DataScience-portfolio",
      color: "secondary",
      image: customerChurnImage,
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
                className={`bg-gradient-card border ${borderClass} overflow-hidden shadow-card ${glowClass} transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
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
                      className={
                        project.color === "primary"
                          ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          : "border-secondary text-secondary hover:bg-secondary hover:text-black"
                      }
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
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
