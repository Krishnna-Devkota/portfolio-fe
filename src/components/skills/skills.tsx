import Container from "../layout/container";
import ExpandableSkillsCard from "./expandable-skills-card";

export default function Skills() {
    return (
        <div className="md:py-24">
            <Container className="flex flex-col space-y-12">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl text-white text-center font-bold tracking-tighter uppercase"> MY Skills</h2>
                <ExpandableSkillsCard />
            </Container>
        </div>
    );
}