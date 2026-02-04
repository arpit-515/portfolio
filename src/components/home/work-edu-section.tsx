"use client";

import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeaderBadge } from "../ui/header-badge";
import TechBadge from "./tech-badge";
import { HiArrowLongRight } from "react-icons/hi2";

import { FaPython } from "react-icons/fa";
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";

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
      staggerChildren: 0.2,
    },
  },
};

/* ================================
   Timeline Data (REAL & SAFE)
================================ */

const experiences = [
  {
    id: 1,
    type: "education",
    title: "Integrated M.Tech in Information Technology",
    company: "IIPS, DAVV",
    location: "Indore, India",
    duration: "2023 – 2028",
    description:
      "Currently pursuing an integrated master's program with a focus on software development, data structures, and system design.",
    achievements: [
      "Strong foundation in programming and problem solving",
      "Hands-on experience through projects and hackathons",
      "Actively building real-world applications alongside coursework",
    ],
    technologies: [
      { name: "Data Structures", icon: Award },
      { name: "Algorithms", icon: Award },
    ],
    icon: GraduationCap,
  },

];

/* ================================
   Component
================================ */

export default function WorkEduSection() {
  return (
    <section id="education" className="bg-background px-4 py-16 mb-12">
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
            text="My Journey"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and hands-on experience through projects and hackathons.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-500/30 transform -translate-x-1/2" />

          <div className="space-y-12 w-full">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className="relative w-full flex items-center"
              >
                <div className="absolute left-4 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent border border-neutral-500/30" />
                </div>

                <HiArrowLongRight className="absolute left-9 text-neutral-500 text-3xl transform -translate-x-1/2 z-10" />

                <div className="ml-12 w-full">
                  <Card className="bg-transparent border hover:border-neutral-400 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-md border">
                          <experience.icon className="h-5 w-5" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-medium">
                                {experience.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {experience.company}
                              </p>
                            </div>

                            <Badge variant="outline" className="text-xs">
                              {experience.type === "education"
                                ? "Education"
                                : "Project"}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2 uppercase tracking-wide">
                          Highlights
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Award className="size-4 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center rounded-2xl p-6 border">
            <div className="text-left">
              <h3 className="font-bold mb-1">Resume</h3>
              <p className="text-sm text-muted-foreground">
                Download my resume for more details
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1D18m6TpU2ZrLs1AjOCMxf4y5f7CdMPVZ/view"
              target="_blank"
              className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition"
            >
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
