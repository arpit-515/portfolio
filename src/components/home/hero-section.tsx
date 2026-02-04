"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FlipWords } from "../ui/flip-words";
import { BorderBeam } from "../ui/border-beam";

import SocialLinks from "./socials";
import ContactDialog from "./contact-dialog";
import Link from "next/link";

export default function CoolHeroSection() {
  const words = [
    "Android Developer with Kotlin & Jetpack Compose",
    "Flutter Developer building smooth cross-platform apps",
    "Mobile App Developer focused on performance",
    "Backend Developer with Flask & Node.js",
    "API Builder using RESTful architectures",
    "Full-Stack Mobile Developer",
    "Problem Solver with a DSA-first mindset",
    "Builder of scalable and reliable systems",
    "Engineer who cares about clean architecture",
    "Developer focused on maintainable, readable code",
    "Tech Explorer with a curiosity-driven approach",
    "Learner constantly leveling up",
    "Builder of real-world products, not just demos"
  ];


  const techStack = [
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Dart",
    "Java",
    "Python",
    "Flask",
    "REST APIs",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Git",
  ];


  return (
    <section
      id="about"
      className="min-h-[90vh] h-full relative flex items-center justify-center overflow-hidden bg-background px-4 mb-8">
      <div className="container mx-auto relative z-10">
        <div className="items-center mt-4 sm:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold mb-5">
            Arpit Singh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center mt-3 lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-primary font-medium mb-6">
              <FlipWords words={words} />
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed w-full">
              I create modern, responsive applications with
              {techStack.map((tech, i) =>
                i === techStack.length - 1 ? (
                  <span
                    key={tech}
                    className="text-accent-foreground">{` and ${tech}. `}</span>
                ) : (
                  <span
                    key={tech}
                    className="text-accent-foreground">{` ${tech}, `}</span>
                )
              )}
              Clean code, smooth experiences, and modern design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                variant={"outline"}
                asChild
                className="group hover:shadow-primary border border-zinc-500/10  cursor-pointer relative bg-linear-t">
                <Link href={"#projects"}>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <BorderBeam
                    size={40}
                    initialOffset={20}
                    className="from-transparent via-zinc-900 dark:via-zinc-50 to-transparent"
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20
                    }}
                  />
                </Link>
              </Button>
              <ContactDialog />
            </motion.div>

            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
