import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description: "Streamline operations and enhance productivity with cutting-edge AI solutions.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Code,
    title: "Digital Strategy",
    description: "Position your brand for exponential growth with data-driven strategies.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Lightbulb,
    title: "SomoAI Education",
    description: "Revolutionary educational solutions preparing leaders of tomorrow.",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Driving positive change through technology and innovation.",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-6 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}