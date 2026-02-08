
"use client";
import React from "react";
import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full px-4 sm:px-8">
      <Link
        href="https://pomodoro-yb8i.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1 lg:col-span-2 group"
      >
          <WobbleCard
            containerClassName="h-full min-h-[300px] sm:min-h-[400px] cursor-pointer bg-[#0a0a0a]"
            style={{ 
              backgroundImage: "url('/pj1.jpg')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-2xl" />
            <div className="relative max-w-xs p-4 rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                POMODORO TIMER
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                ChronoBerry - A cute pomodoro timer with lofi music
              </p>
            </div>
          </WobbleCard>
      </Link>
      <Link
        href="https://www.krishdeeves.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1 group"
      >
        <WobbleCard 
          containerClassName="h-full min-h-[300px] sm:min-h-[400px] cursor-pointer bg-[#0a0a0a]" 
          style={{ 
            backgroundImage: "url('/pj3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-2xl" />
          <div className="relative max-w-80 p-4 rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
              PORTFOLIO
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-xs md:text-sm text-neutral-200">
              Personal portfolio showcasing high-performance web applications and UI designs.
            </p>
          </div>
        </WobbleCard>
      </Link>
       <Link
          href="https://consultancy.krishdeeves.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 lg:col-span-3 group"
        >
          <WobbleCard containerClassName="min-h-[400px] sm:min-h-[500px] bg-[#0a0a0a]" style={{ 
                  backgroundImage: "url('/pj2.jpg')",
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-2xl" />
            <div className="relative max-w-sm p-6 rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Education Consultancy
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
                A modern consultancy platform built with Next.js, Sanity CMS.
              </p>
            </div>
          </WobbleCard>
        </Link>
    </div>
  );
}
