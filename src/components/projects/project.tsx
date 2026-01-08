import Container from "../layout/container";
import { WobbleCardDemo } from "./projectcards";

export default function Project() {
    return (
        <div className="py-24">
            <Container className="flex flex-col space-y-8">
             <p className="text-7xl text-white text-center">MY PROJECTS</p>
             <WobbleCardDemo />
              
            </Container>
        </div>
        
    );
}