import AboutSection from "./Components/AboutSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import ProjectsSection from "./Components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      <Footer/>
    </main>
  );
}
