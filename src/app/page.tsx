import AboutMe from "@/components/aboutme/about-me";
import Contact from "@/components/contact/contact";
import Project from "@/components/projects/project";
import Skills from "@/components/skills/skills";

export default function Page() {
  return (
    <div>
      <section id="home">
        <AboutMe/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}
