"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "AI Intern",
      company: "RINEX",
      period: "Jan 2025 - Feb 2025",
      description: [
        "Developed basic machine learning models using Python and Scikit-learn.",
        "Performed data preprocessing, feature selection, and model evaluation."
      ],
      skills: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      role: "Data Science Intern",
      company: "SMEC Labs",
      period: "Jun 2025 - Jul 2025",
      description: [
        "Cleaned and analyzed datasets using Python and Excel.",
        "Created visualizations and dashboards using Power BI.",
        "Presented insights using charts and reports for effective decision-making."
      ],
      skills: ["Data Cleaning", "Pandas", "Data Visualization", "Power BI"]
    }
  ];

  return (
    <section className="py-24 relative bg-background/50" id="experience">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and internships."
        />

        <div className="relative max-w-5xl mx-auto py-8">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border border-primary/30 items-center justify-center z-10 text-primary shadow-[0_0_15px_rgba(var(--primary),0.15)]">
                    <Briefcase size={16} />
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-5/12" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-5/12"
                  >
                    <GlassCard className="p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
                      {/* Top Right Accent Glow */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-2xl rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
                      
                      {/* Geometric Corner Accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-50 pointer-events-none" />

                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                          <div className="text-primary font-semibold text-sm tracking-wide uppercase">{exp.company}</div>
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-background/50 border border-border/50 text-muted-foreground text-xs font-medium backdrop-blur-sm">
                          {exp.period}
                        </div>
                      </div>

                      <div className="space-y-2 mb-8 relative z-10">
                        {exp.description.map((item, i) => (
                          <p key={i} className="text-muted-foreground/90 text-sm leading-relaxed">
                            {item}
                          </p>
                        ))}
                      </div>

                      {exp.skills && (
                        <div className="flex flex-wrap gap-2 relative z-10">
                          {exp.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 text-xs rounded border border-border/60 text-muted-foreground/80 bg-background/30 hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
