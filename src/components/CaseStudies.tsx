import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <Tabs defaultValue="mpasho" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mpasho">Mpasho.co.ke</TabsTrigger>
              <TabsTrigger value="afrotape">Afrotape Entertainment</TabsTrigger>
            </TabsList>
            <TabsContent value="mpasho">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">Catalyzing a Digital Media Revolution</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground">Kenya lacked a dynamic digital platform for entertainment news, limiting growth opportunities.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground">Led launch with focus on high-engagement content, real-time updates, and user experience.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-muted-foreground">3M monthly users within 3 months, Top 10 website in Kenya.</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="afrotape">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">Innovating Amidst Adversity</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground">COVID-19 disrupted traditional live events, impacting artists and businesses.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground">Pivoted to consulting services with digital marketing strategies and virtual events.</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-muted-foreground">50% Revenue retention and successful transition to digital marketing.</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}