import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogos";
import LatestJobs from "./components/LatestJobs";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <LatestJobs />
      <Footer />
    </div>
  );
}
