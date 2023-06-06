import ApplySection from "../components/ApplySection/ApplySection";
import CardSection from "../components/CardSection/CardSection";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import LineChart from "../components/LineChart/LineChart";
import Navbar from "../components/Navbar/Navbar";
import Nemo from "../components/NemoSection/Nemo";
import Social2nd from "../components/Social-2nd/Social-2nd";
import SocialSection from "../components/Social-Section/SocialSection";
import TopTable from "../components/Top-Table/TopTable";
import TouchSection from "../components/Touch/TouchSection";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto">
        <TopTable />
        <SocialSection />
        <CardSection />
        <Nemo />
        <LineChart />
        <TouchSection />
        <Social2nd />
        <ApplySection />
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default Layout;
