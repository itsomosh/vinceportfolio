import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${(i + 1) * 300}px`,
              height: `${(i + 1) * 300}px`,
              top: '50%',
              left: '50%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: `-50%`,
              y: `-50%`,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Vincent Omondi Otieno
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Digital Innovation Leader & AI Advocate | Co-Founder of ZaidiLab
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based in Nairobi and Diani, pioneering Africa's digital renaissance through media innovation and AI solutions
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}