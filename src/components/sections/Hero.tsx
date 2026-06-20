"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/3d/ParticleBackground";
import { Button } from "@/components/ui/Button";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const words = [
    "Passionate About Software Development and Data Analytics",
    "Continuously Learning and Building Real-World Solutions",
    "Turning Data into Meaningful Insights"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));

        if (typedText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));

        if (typedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          // Pause briefly at empty before starting next word
          timer = setTimeout(handleTyping, 500);
          return;
        }
      }

      // Dynamic speeds: 100ms when typing, 50ms when deleting
      const speed = isDeleting ? 50 : 100;
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 glass text-sm font-medium"
          >
            Aspiring Data Analyst & AI Developer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-gradient">Akhil M</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-medium">
              {typedText}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
              />
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aspiring Software Developer and Data Analyst passionate about continuous learning and leveraging data and technology to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto p-0" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-full px-8">
                <FileText size={18} />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-12">
            {[
              { icon: FaGithub, href: "https://github.com/akhilmanikandan27", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/akhil-m-300562341", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full glass text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      

    </section>
  );
}
