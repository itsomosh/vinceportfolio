import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Let's Build the Future Together</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "vince@zaidicreatorlab.com",
                href: "mailto:vince@zaidicreatorlab.com"
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+254 722 135 913",
                href: "tel:+254722135913"
              },
              {
                icon: Globe,
                title: "Websites",
                value: "zaidicreatorlab.com / zaidilabstudio.com",
                href: "https://zaidicreatorlab.com"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{item.title}</p>
                      <a
                        href={item.href}
                        target={item.icon === Globe ? "_blank" : undefined}
                        rel={item.icon === Globe ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}