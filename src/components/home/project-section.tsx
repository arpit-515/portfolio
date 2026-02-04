"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaNodeJs,
  FaSitemap,
  FaProjectDiagram,
  FaPython,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { ProjectCard } from "./project-card";
import { HeaderBadge } from "../ui/header-badge";
import { Sparkles } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";


export interface Technology {
  name: string;
  icon: any;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  features: string[];
  category: string;
  learnings?: string[];
}


const projects: Project[] = [
  {
    id: 1,
    title: "Zweather App", 
    description:
      "A Flutter-based real-time weather app with a custom UI, smooth animations, and backend-powered data fetching.",
    category: "Mobile App",

    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Python", icon: FaPython },
    ],

    images: [
      "/app-4.png",
      "/app-5.png",
      "/app-6.png",
    ], 

    liveUrl: "https://github.com/arpit-515/Zweather-app", 
    githubUrl: "https://github.com/arpit-515/Zweather-app",

    features: [
      "Real time weather updates",
      "Hero animations for forecast screen",
      "Backend-powered weather metadata fetching",
      "Optimized UI for smooth scrolling",
    ],

    learnings: [
      "Managing async state in Flutter",
      "Designing APIs for mobile clients",
      "Handling edge cases in fetching weather",
    ],
  },

  {
    id: 2,
    title: "Moodlift App",
    description:
      "A Mental - Health tracking and improving app",
    category: "Full-Stack",

    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],

    images: [
      "/app-1.png",
      "/app-2.png",
      "/app-3.png",
    ],

    githubUrl: "https://github.com/arpit-515/moodlift-frontend",

    features: [
      "Focused on clean UI/UX to create a calming, low-stress user experience",
      "Encrypted Data Storage",
      "Implemented secure and maintainable frontend architecture",
      "Secure environment variable handling",
    ],

    learnings: [
      "Frontend security awareness",
      "Codebase refactoring skills",
      "State and data handling",
    ],
  },

  {
  id: 3,
  title: "Maze Generator & Solver",
  description:
    "A Python-based application to generate random mazes and solve them using classic pathfinding algorithms.",
  category: "Algorithms",

  technologies: [
    { name: "Python", icon: FaPython },
    { name: "Algorithms", icon: FaProjectDiagram },
    { name: "Data Structures", icon: FaSitemap },   
  ],

  images: [
    "/maze-1.png", 
    "/maze-2.png",
  ],

  githubUrl: "https://github.com/arpit-515/maze-generator-solver",

  features: [
    "Random maze generation using algorithmic logic",
    "Maze solving using BFS and DFS",
    "Visual representation of paths and dead ends",
    "Optimized traversal for performance",
  ],

  learnings: [
    "Algorithmic problem solving",
    "Graph traversal techniques",
    "Efficient data structures",
  ],
},
];

/* ================================
   ANIMATIONS
================================ */

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================================
   COMPONENT
================================ */

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 mb-12 bg-background sm:px-4"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <HeaderBadge
            icon={<Sparkles className="size-4" />}
            text="My Projects"
          />

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Things I’ve Built
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Real-world projects focused on mobile apps, backend systems,
            and clean architecture.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            asChild
            size="lg"
            className="relative rounded-full"
          >
            <Link
              href="https://github.com/arpit-515"
              target="_blank"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              See My Code & Experiments
              <BorderBeam size={40} initialOffset={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
