import Container from "../layout/container";
import { WobbleCardDemo } from "./projectcards";

export default function Project() {
    return (
        <div className="py-12 sm:py-24">
            <Container className="flex flex-col space-y-8">
             <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center font-bold tracking-tighter uppercase">MY PROJECTS</h2>
             <WobbleCardDemo />
              
            </Container>
        </div>
        
    );
}