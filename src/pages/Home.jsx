import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import PhotoGallery from "../components/PhotoGallery";
import Pricing from "../components/Pricing";
import ScrollButton from "../components/ScrollButton";

function Home() {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <Hero />
      <div className="grid justify-center m-10">
        <div className="grid lg:grid-cols-2 place-items-center ">
          <Services />
          <img src="src\img\puppy.jpg" alt="" className=" rounded-lg" />
        </div>
        <Benefits />
      </div>
      <div>
        <TeamMembers />
      </div>
      <div>
        <PhotoGallery />
        <Pricing />
      </div>

      <>
        <Footer />
      </>
    </div>
  );
}

export default Home;
