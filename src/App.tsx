import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
