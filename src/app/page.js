"use client";
import { Navbar, Header, Work, Skills } from "../../components";
import { Parallax } from "@react-spring/parallax";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Parallax>
        <Header />
        <Work />
        <Skills />
      </Parallax>
    </div>
  );
}
