import Container from "../layout/container"
import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import ContactForm from "./contactbox";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1f44] to-black py-16">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 items-center">
                <section className="text-white space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageCircle className="w-8 h-8 text-blue-400" />
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Let&apos;s Connect
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                            I&apos;m always excited to discuss new opportunities, collaborate on projects, or just have a friendly chat about technology and design.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Find me on
                        </h2>
                        <div className="flex gap-6">
                            <Link
                                href="mailto:krishnnadevkota4@gmail.com"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-400/25"
                                title="Email"
                                passHref
                            >
                                <Mail className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/krishdeeves/"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Instagram className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/krishnnadevkota/"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Linkedin className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="https://github.com/Krishnna-Devkota"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Github className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-700">
                        <p className="text-gray-400 text-sm">
                            ✨ Response time: Usually within 24 hours in Linkedin
                        </p>
                    </div>
                </section>
                
                <div className="flex justify-center lg:justify-end">
                    <ContactForm />
                </div>
            </Container>
        </div>
    );
}