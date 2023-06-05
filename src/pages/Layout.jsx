import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <>
        <Navbar/> 
        <main className="container mx-auto">
          <Hero/>
        </main>
         
        </>
    );
};

export default Layout;