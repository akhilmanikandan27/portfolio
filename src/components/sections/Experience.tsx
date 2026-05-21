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
      description:
        "Worked on developing machine learning models and analyzing datasets to extract actionable insights. Collaborated with a team of interns to build predictive solutions and presented findings to senior engineers.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Teamwork"],
    },
    {
      role: "Data Science Intern",
      company: "SMEC Labs",
      period: "Jun 2025 - Jul 2025",
      description:
        "Assisted in data cleaning, preprocessing, and exploratory data analysis using Python and Pandas. Created interactive dashboards to visualize key performance indicators and improve data accessibility.",
      skills: ["Data Cleaning", "Pandas", "Data Visualization", "Power BI"],
    },
  ];

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and hands-on experience in the field."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2 rounded-full hidden md:block" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-primary flex items-center justify-center z-10 hidden md:flex">
                  <Briefcase size={16} className="text-primary" />
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  >
                    <GlassCard className="relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                      
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-background border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
