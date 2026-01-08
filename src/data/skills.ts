export const skills = {
  frontend: {
    label: "Frontend",
    image: "/frontend.png", 
    items: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ]
  },
  uiux: {
    label: "UI / UX Design",
    image: "/uiux.png",
    items: [
      "Figma",
      "Responsive Design"
    ]
  },
  toolsAndTechnologies: {
    label: "Tools and Technologies",
    image: "/tools.png",
    items: [
      "VS Code",
      "Vercel"
    ]
  },
  creative: {
    label: "Creative Skill",
    image: "/creative.png",
    items: [
      "Basics of GSAP",
      "Framer Motion",
      "shadcn"
    ]
  }
};

export type Skills = typeof skills;
