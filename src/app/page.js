import {
  About,
  Contact,
  Hero,
  Navbar,
  Skills,
  Projects,
  Services,
  Footer,
} from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
