import React from "react";
import About from "./components/aboutme/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Quolification from "./components/skills/Skills";
import Services from "./components/services/Services";
import Info from "./components/info/Info";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Quolification />
    <Services />
    <Projects />
    <Info />
    </>
  );
}
