"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function CodeBlockDemo() {
  const code = `const profile = {
  name: "Krishnna Devkota",
  title: "Frontend Developer | UI/UX Designer ",

  skills: [
    "ReactJS",
    "Tailwind CSS",
    "TypeScript",
    "HTML",
    "JavaScript",
    "Git",
    "VS Code",
    "UI/UX Design",
  ],

  traits: {
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
  },

  hireable() {
    return (
      this.traits.hardWorker &&
      this.traits.problemSolver &&
      this.skills.length >= 5
    );
  },
};

// Result
profile.hireable(); // true 🚀
`;

  return (
    <CodeBlock
      language="javascript"
      filename="profile.js"
      // highlightLines={[1, 4, 7, 18, 26]}
      code={code}
    />
  );
}
