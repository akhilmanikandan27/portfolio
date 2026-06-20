"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Send, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative bg-background/50" id="contact">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-8">
                <Mail size={40} />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Let&apos;s build something together</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                I&apos;m currently available for freelance work and open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              
              <div className="flex flex-col gap-4 mb-8 w-full max-w-sm mx-auto">
                <div className="flex items-center gap-4 bg-background/30 p-4 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:akhilmanikantan1@gmail.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors truncate block">
                      akhilmanikantan1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-background/30 p-4 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-0.5">Location</p>
                    <p className="font-medium">Kollam, Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm mx-auto mt-4">
                <Button size="lg" className="w-full gap-2 text-lg h-14 p-0" asChild>
                  <a href="mailto:akhilmanikantan1@gmail.com" className="flex items-center justify-center gap-2 w-full h-full px-8">
                    Send an Email
                    <Send size={20} />
                  </a>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
