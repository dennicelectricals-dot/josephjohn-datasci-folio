import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 p-8 md:p-12 shadow-card hover:shadow-neon-blue transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">JJ</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Joseph John
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate and results-driven data science professional with expertise in{" "}
                  <span className="text-primary font-semibold">Python</span>,{" "}
                  <span className="text-primary font-semibold">machine learning</span>, and{" "}
                  <span className="text-primary font-semibold">data analysis</span>. Experienced in 
                  developing intelligent systems, including a skin cancer detection model using TensorFlow 
                  and Streamlit. Conversant with LLMs and NLP, with a focus on real-world applications. 
                  Skilled at simplifying complex concepts for diverse audiences.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    Based in Jos, Nigeria
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
