"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      title: "Data Analytics Virtual Experience",
      issuer: "Deloitte Australia",
      date: "2023",
      link: "#"
    },
    {
      title: "Data Visualization: Empowering Business with Effective Insights",
      issuer: "Tata",
      date: "2023",
      link: "#"
    },
    {
      title: "AI Internship Certification",
      issuer: "RINEX",
      date: "2023",
      link: "#"
    },
    {
      title: "Data Science Internship Certification",
      issuer: "SMEC Labs",
      date: "2022",
      link: "#"
    }
  ];

  return (
    <section className="py-24 relative" id="certifications">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning and professional development."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="h-full flex flex-col group p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  Issued by {cert.issuer}
                </p>
                

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
