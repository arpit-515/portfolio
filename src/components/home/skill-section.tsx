"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Settings, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HeaderBadge } from "../ui/header-badge";
import { cn } from "@/lib/utils";

// Icons
import {
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiDart,
  SiKotlin,
  SiFirebase,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiGithub,
  SiPostman,
  SiDocker,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

/* ================================
   Animations
================================ */

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ================================
   Skills Data (REALISTIC)
================================ */

const skillsData = {
  mobile: {
    title: "Mobile Development",
    icon: Code,
    description: "Building smooth, user-focused mobile applications",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  backend: {
    title: "Backend & APIs",
    icon: Server,
    description: "Server-side logic, APIs, and data handling",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "REST APIs", icon: SiPostman },
      { name: "Supabase", icon: SiSupabase },
    ],
  },

  database: {
    title: "Databases",
    icon: Database,
    description: "Data modeling and persistence",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  tools: {
    title: "Tools & Environment",
    icon: Settings,
    description: "Development tools and workflow",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: SiDocker },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
    ],
  },
};

/* ================================
   Component
================================ */

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background px-4 py-16 mb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HeaderBadge
            icon={<Sparkles className="size-4" />}
            text="Skills & Tools"
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build reliable mobile apps and backend systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {Object.entries(skillsData).map(([key, category]) => (
            <motion.div key={key} variants={fadeInUp}>
              <Card className="bg-transparent border transition-all hover:border-neutral-400">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md border">
                      <category.icon className="size-5 sm:size-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={cn(
                          "flex items-center gap-2 p-2 rounded-lg border transition-colors",
                          "hover:border-neutral-400"
                        )}
                      >
                        <skill.icon className="size-5" />
                        <span className="text-base font-medium truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Honest Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: "Projects Built", value: "8+" },
            { label: "Tech Stack", value: "15+" },
            { label: "Languages", value: "4" },
            { label: "OS Used", value: "Linux" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
