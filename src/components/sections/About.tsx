"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Database, LineChart, Brain, Code2 } from "lucide-react";

export function About() {
  const skills = [
    { name: "Python", level: 85 },
    { name: "SQL", level: 75 },
    { name: "Power BI", level: 78 },
    { name: "Machine Learning", level: 72 },
    { name: "Pandas/NumPy", level: 80 },
    { name: "Scikit-learn", level: 72 },
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
          subtitle="Passionate about leveraging data to drive decisions and building intelligent systems."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <GlassCard className="p-8 relative z-10">

              <p className="text-muted-foreground leading-relaxed mb-6">
                Aspiring Data Analyst & AI Developer with a strong interest in data analytics, machine learning, and intelligent systems. Skilled in Python, SQL, Power BI, and computer vision with hands-on experience in building real-world AI and analytics projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about transforming data into meaningful insights, developing interactive dashboards, and creating AI-driven solutions to solve real-world problems. Continuously learning and exploring modern technologies in AI, Data Science, and analytics.
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

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
