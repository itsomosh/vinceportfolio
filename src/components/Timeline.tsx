import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Co-Founder",
    company: "ZaidiLab",
    period: "Jul 2024 - Present",
    location: "Kenya",
    current: true,
  },
  {
    role: "Digital Marketing Consultant",
    company: "Afrotape",
    period: "Apr 2015 - Mar 2023",
    location: "Nairobi",
    description: "Led digital transformation initiatives and marketing strategies.",
  },
  {
    role: "Digital Marketing Consultant",
    company: "Kilele Media Agency",
    period: "Jan 2013 - Mar 2023",
    location: "Nairobi",
  },
  {
    role: "Digital Marketing Consultant",
    company: "Kazana Group",
    period: "Aug 2022 - Mar 2023",
    location: "Remote",
  },
  {
    role: "Digital Media Consultant",
    company: "Ministry of Culture, Youth Affairs & Sports",
    period: "May 2020 - Jun 2020",
    location: "Nairobi",
    description: "Developed social media platforms for the 'Together At Home' Artistes Stimulus Program.",
  },
  {
    role: "Digital Media Executive",
    company: "Radio Africa Group",
    period: "Aug 2014 - Dec 2017",
    location: "Nairobi",
  },
  {
    role: "Co-Founder",
    company: "Mpasho News",
    period: "Aug 2014 - Dec 2017",
    location: "Nairobi",
    description: "Led the platform to become Kenya's most-visited entertainment blog.",
  },
  {
    role: "Writer/Photojournalist",
    company: "Ghafla! Kenya",
    period: "Feb 2013 - Aug 2014",
    location: "Nairobi",
  },
  {
    role: "Correspondent",
    company: "The Insyder Magazine",
    period: "Jun 2009 - Feb 2013",
    location: "Nairobi",
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">Professional Journey</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`mb-6 relative ${experience.current ? 'border-primary/50' : ''}`}>
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary" />
                  </div>
                  <CardContent className="p-6 ml-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{experience.role}</h3>
                        <p className="text-primary">{experience.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span>{experience.period}</span>
                        <span className="mx-2">•</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    {experience.description && (
                      <p className="text-muted-foreground mt-2">{experience.description}</p>
                    )}
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