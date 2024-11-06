"use client";
import "../styles/globals.css";
import Header from "../components/Header"; // Import the Header component
import Hero from "../components/Hero"; // Import the Header component
import Heroprojects from "../components/Heroprojects"; // Import the Header component
import Blogprojects from "../components/Blogprojects"; // Import the Header component
import BuildSection from "../components/BuildSection";
import Integrations from "../components/Integrations"; // Import the
import Projects from "../components/Projects";
import ViewProjects from "../components/ViewProjects";
import Footer from "../components/Footer";
import Footerlinks from "../components/Footerlinks";

export default function Home({ data }) {
  return (
    <div>
      <Header />
      <Hero />
      <Heroprojects />
      <Blogprojects />
      <BuildSection />
      <Integrations />

      <Projects />
      <ViewProjects />
      <Footer />
      <Footerlinks />
    </div>
  );
}
