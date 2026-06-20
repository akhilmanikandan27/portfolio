"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, BarChart, FileCode2, Cpu, Camera } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import React, { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  github: string;
  demo: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <GlassCard className="h-full flex flex-col group relative overflow-hidden">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="mb-6 h-48 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.4 }}
              className="text-primary/50 group-hover:text-primary transition-colors duration-300"
            >
              <project.icon size={80} strokeWidth={1} />
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string) => (
              <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto relative z-10">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <FaGithub size={18} />
              Code
            </a>

          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

export function Projects() {
  const projects = [
    {
      title: "Smart Wildlife Detection and Monitoring System",
      description: "Developed a real-time animal detection system using Python, OpenCV, and YOLOv8 with confidence-based object detection.",
      tech: ["Python", "OpenCV", "YOLOv8"],
      icon: Camera,
      github: "https://github.com/akhilmanikandan27/AI-based-wildlife-Detection-.git",
      demo: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: "Developed and deployed a responsive portfolio website showcasing projects, skills, certifications, and contact information.",
      tech: ["React", "TypeScript", "CSS"],
      icon: FileCode2,
      github: "https://github.com/akhilmanikandan27/portfolio.git",
      demo: "#",
    },
    {
      title: "Sales Data Dashboard",
      description: "Processed and analyzed sales data and built interactive dashboards to visualize business metrics and insights.",
      tech: ["Python", "Excel", "Power BI"],
      icon: BarChart,
      github: "https://github.com/akhilmanikandan27/Sales-Data-dashboard.git",
      demo: "#",
    },
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my data science and analysis projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
