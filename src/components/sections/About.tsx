"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Database, LineChart, Brain, Code2, User } from "lucide-react";

export function About() {
  const skillCategories = [
    { category: "Programming", skills: ["Java", "Python", "SQL"] },
    { category: "Frontend", skills: ["HTML", "CSS", "React"] },
    { category: "Libraries", skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
    { category: "Data Analysis", skills: ["Data Cleaning", "Data Preprocessing", "Exploratory Data Analysis (EDA)"] },
    { category: "Data Visualization", skills: ["Power BI", "Excel Dashboards"] },
    { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Excel"] }
  ];

  const floatingIcons = [
    { Icon: Database, color: "text-blue-500", delay: 0 },
    { Icon: LineChart, color: "text-green-500", delay: 0.2 },
    { Icon: Brain, color: "text-purple-500", delay: 0.4 },
    { Icon: Code2, color: "text-orange-500", delay: 0.6 },
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Aspiring Software Developer and Data Analyst Passionate About Continuous Learning and Building Intelligent Solutions."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 flex justify-center lg:justify-end"
          >
            <GlassCard className="p-7 relative z-10 w-full max-w-[420px] flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <User size={24} />
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                Final-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience in data analysis and machine learning through internships and academic projects. Passionate about continuous learning and seeking opportunities in Data Analytics and Software Development.
              </p>
            </GlassCard>

            {/* Floating Icons Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.color} opacity-20`}
                  style={{
                    top: index * 10 + 20 + "%",
                    left: index * 15 + 10 + "%",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  <item.Icon size={48} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex justify-center lg:justify-start lg:pl-12"
          >
            <div className="w-full max-w-[550px] flex flex-col pt-2 lg:pt-0">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skillCategories.map((cat, index) => (
                  <div key={cat.category}>
                    <h4 className="text-sm font-semibold text-primary/80 mb-3 uppercase tracking-wider">{cat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIndex) => (
                        <motion.div 
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + sIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-md border border-primary/20 bg-primary/5 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
