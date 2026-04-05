"use client";

import { Mail, Package, User, Moon, Sun } from "lucide-react";
import { VscTools } from "react-icons/vsc";
import { MenuDock, MenuDockItem } from "../ui/dock";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const customMenuItems: MenuDockItem[] = useMemo(() => {
    return [
      {
        label: "about",
        icon: User,
        onClick: () =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "projects",
        icon: Package,
        onClick: () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "skills",
        icon: VscTools,
        onClick: () =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "contact",
        icon: Mail,
        onClick: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "theme",
        icon: currentTheme === "dark" ? Sun : Moon,
        onClick: () => setTheme(currentTheme === "dark" ? "light" : "dark"),
      },
    ];
  }, [currentTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
    const sectionIds = ["about", "projects", "skills", "contact"];
    const sectionToIndexMap: Record<string, number> = {};
    customMenuItems.forEach((item, index) => {
      if (item.label !== "theme") sectionToIndexMap[item.label] = index;
    });

    const findActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let activeSection = "";
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (elementTop <= scrollPosition && elementBottom >= scrollPosition) {
            const distance = Math.abs(elementTop - scrollPosition);
            if (distance < minDistance) {
              minDistance = distance;
              activeSection = id;
            }
          }
        }
      });

      if (activeSection && sectionToIndexMap[activeSection] !== undefined) {
        if (sectionToIndexMap[activeSection] !== activeIndex) {
          setActiveIndex(sectionToIndexMap[activeSection]);
        }
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          findActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    findActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", findActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", findActiveSection);
    };
  }, [customMenuItems, activeIndex]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 w-max">
        <MenuDock
          items={customMenuItems}
          variant="default"
          animated={false}
          activeIndex={activeIndex}
          className="relative mx-0 w-auto left-auto right-auto top-auto bottom-auto translate-x-0 sm:w-auto sm:left-auto sm:translate-x-0 border-0"
        />

        {}
        <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg"></div>
      </div>
    </>
  );
}