"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useEffect, useState } from "react";

const CircularProgress = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {

    const animate = () => {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.floor(start));
        }
      }, 16);
      
      return timer;
    };
    
    const timeout = setTimeout(() => {
      const timer = animate();
      return () => clearInterval(timer);
    }, delay * 1000 + 500); // Wait for scroll animation + delay
    
    return () => clearTimeout(timeout);
  }, [value, delay]);

  const strokeDashoffset = circumference - (currentValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-secondary"
          />
          {/* Progress circle */}
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            style={{ strokeDasharray: circumference }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-neon-blue)" />
              <stop offset="50%" stopColor="var(--color-neon-purple)" />
              <stop offset="100%" stopColor="var(--color-neon-cyan)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{currentValue}%</span>
        </div>
      </div>
      <span className="mt-4 font-medium text-center">{label}</span>
    </div>
  );
};

export function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", value: 85 },
        { name: "SQL", value: 75 },
        { name: "Git", value: 70 },
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Excel", value: 82 },
        { name: "Pandas", value: 80 },
        { name: "NumPy", value: 75 },
        { name: "Power BI", value: 78 },
        { name: "Tableau", value: 72 },
      ]
    },
    {
      title: "Visualization",
      skills: [
        { name: "Data Visualization", value: 80 },
        { name: "Dashboarding", value: 78 },
        { name: "EDA", value: 76 },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", value: 72 },
        { name: "Feature Engineering", value: 65 },
        { name: "Model Evaluation", value: 70 },
        { name: "Data Preprocessing", value: 74 },
      ]
    },
    {
      title: "Computer Vision",
      skills: [
        { name: "OpenCV", value: 70 },
        { name: "YOLOv8", value: 68 },
        { name: "Object Detection", value: 72 },
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-background/50" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Skills Showcase" 
          subtitle="My technical toolkit and proficiency levels."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className={catIndex === categories.length - 1 && categories.length % 2 !== 0 ? "md:col-span-2" : ""}
            >
              <GlassCard className="h-full">
                <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
                <div className="flex justify-center items-start flex-wrap gap-8">
                  {category.skills.map((skill, index) => (
                    <CircularProgress 
                      key={skill.name}
                      label={skill.name}
                      value={skill.value}
                      delay={catIndex * 0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
