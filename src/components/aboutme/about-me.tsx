"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Container from "../layout/container";
import { TextReveal } from "@/components/ui/text-reveal-card";
import { MacbookScrollDemo } from "../landingpages/macbook";
import CodeBlockDemo from "../landingpages/code-block";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "../ui/moving-border";
import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="items-center px-2 sm:px-4 md:px-8 py-6">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
                <BackgroundBeamsWithCollision>
                    <div className="font-bold text-white text-start px-2 sm:px-4 md:px-0">
                        <p className="text-2xl sm:text-3xl md:text-4xl">Hi! I&apos;m </p>
                        <p className="text-4xl sm:text-5xl md:text-7xl">KRISHNNA DEVKOTA</p>
                        <TextReveal text="Frontend Developer" revealText="UI/UX Designer" className="text-xl sm:text-2xl md:text-5xl" />
                        <section className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button borderRadius="1rem" onClick={() => window.open('https://github.com/Krishnna-Devkota')} className="w-full sm:w-auto">
                                <span>GitHub</span>
                            </Button>
                            <Button borderRadius="1rem" onClick={() => window.open('https://www.linkedin.com/in/krishnnadevkota/')} className="w-full sm:w-auto"> 
                                <span>LinkedIn</span>
                            </Button>
                            <Button
                                as="a"
                                href="/KrishnnaDevkota_FrontendIntern_CV.pdf"
                                download="KrishnnaDevkota_CV.pdf"
                                borderRadius="1rem"
                                className="w-full sm:w-auto"
                            >
                                <span>Download CV</span>
                            </Button>
                        </section>
                    </div>
                </BackgroundBeamsWithCollision>
                <div className="w-full flex justify-center items-center py-8 md:py-0">
                    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                        <MacbookScrollDemo>
                            <CodeBlockDemo />
                        </MacbookScrollDemo>
                    </div>
                </div>
            </Container>
        </div>
    );
}
