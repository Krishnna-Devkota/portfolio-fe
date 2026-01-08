"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  revealText: string;
  className?: string;
}

export function TextReveal({
  text,
  revealText,
  className,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setLeft(rect.left);
    setWidth(rect.width);
  }, []);

  const handleMove = (clientX: number) => {
    const relativeX = clientX - left;
    const percentage = Math.min(Math.max((relativeX / width) * 100, 0), 100);
    setWidthPercentage(percentage);
  };

  return (
    <span
      ref={ref}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setWidthPercentage(0);
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => setIsHover(true)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={() => {
        setIsHover(false);
        setWidthPercentage(0);
      }}
      className={cn(
        "relative inline-block cursor-pointer select-none",
        className
      )}
    >
      {/* REVEAL TEXT (shown from left → right) */}
      <motion.span
        className="absolute inset-0 z-20 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
        animate={{
          clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          opacity: isHover ? 1 : 0,
        }}
        transition={{ duration: isHover ? 0 : 0.35 }}
      >
        {revealText}
      </motion.span>

      {/* BASE TEXT (hidden from left → right) */}
      <motion.span
        className="relative z-10 whitespace-nowrap bg-clip-text text-transparent bg-neutral-500"
        animate={{
          clipPath: `inset(0 0 0 ${widthPercentage}%)`,
        }}
        transition={{ duration: isHover ? 0 : 0.35 }}
      >
        {text}
      </motion.span>

      {/* DIVIDER LINE */}
      <motion.span
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent"
        animate={{
          left: `${widthPercentage}%`,
          opacity: isHover ? 1 : 0,
        }}
        transition={{ duration: isHover ? 0 : 0.35 }}
      />
    </span>
  );
}
