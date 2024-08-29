import {
  About,
  Contact,
  Hero,
  Navbar,
  Skills,
  Work,
  Services,
  Footer,
} from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
