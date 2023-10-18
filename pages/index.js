import AboutSection from "../Components/AboutSection";
import EmailSection from "../Components/EmailSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import ProjectsSection from "../Components/ProjectsSection";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <div className="container mt-24 mx-auto px-10 py-4">
        <HeroSection />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
