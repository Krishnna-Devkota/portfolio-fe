"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { skills } from "@/data/skills";

/* ================== TYPES ================== */

type SkillCard = {
  id: string;
  title: string;
  src: string;
  items: string[];
};

/* ================== COMPONENT ================== */

export default function ExpandableSkillsCard() {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [active, setActive] = useState<SkillCard | null>(null);

  const cards: SkillCard[] = Object.entries(skills).map(([key, value]) => ({
    id: key,
    title: value.label,
    src: value.image,
    items: value.items,
  }));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center ">
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-md rounded-3xl bg-white dark:bg-neutral-900 overflow-hidden"
            >
              <motion.img
                layoutId={`image-${active.id}-${id}`}
                src={active.src}
                alt={active.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <motion.h3
                  layoutId={`title-${active.id}-${id}`}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>

                <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {active.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cards Grid */}
      <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
        {cards.map((card) => (
          <motion.li
            key={card.id}
            layoutId={`card-${card.id}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer rounded-xl p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <motion.img
              layoutId={`image-${card.id}-${id}`}
              src={card.src}
              alt={card.title}
              className="h-40 w-full rounded-lg object-cover"
            />

            <motion.h3
              layoutId={`title-${card.id}-${id}`}
              className="mt-3 text-center font-medium text-gray-500"
            >
              {card.title}
            </motion.h3>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
