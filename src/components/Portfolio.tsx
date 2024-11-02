import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ZaidiCreatorLab Platform",
    description: "Digital innovation hub empowering African creators with AI-powered tools and resources.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Web Platform", "Creator Tools"],
    liveUrl: "https://zaidicreatorlab.com",
    featured: true
  },
  {
    title: "SomoAI Education",
    description: "Revolutionary educational platform combining AI with African storytelling traditions.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
    tags: ["EdTech", "AI", "E-learning"],
    featured: true
  },
  {
    title: "Mpasho Digital Transformation",
    description: "Led Kenya's premier entertainment platform to 3M+ monthly active users.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Media", "Analytics", "Content Strategy"],
    liveUrl: "https://mpasho.co.ke"
  },
  {
    title: "ZaidiLab Studio",
    description: "Creative production studio specializing in innovative digital content.",
    image: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?auto=format&fit=crop&w=800&q=80",
    tags: ["Production", "Creative Studio", "Digital Content"],
    liveUrl: "https://zaidilabstudio.com"
  }
];

export function Portfolio() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering digital innovation across Africa through transformative projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}