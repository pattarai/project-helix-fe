import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Header from "../components/Header/Header";
import Cards from "../components/Header/cards";
import flutt from "../assets/images/flutter.png";

export default function workshop(){
    return (
        <>
        <FadeIn>
          <div className="column-md">
            <NavBar/>
          <div className="mt-md-5 row justify-content-center">
            <Cards src={flutt} title="EXPRESS JS"/>
            <Cards src={flutt} title="IOT WORKSHOP"/>
            <Cards src={flutt} title="DESIGN BOOTCAMP"/>
            <Cards src={flutt} title="REACTJS"/>
            <Cards src={flutt} title="FLUTTER DEVELOPMENT"/>
            <Cards src={flutt} title="WEB DEVELOPMENT"/>
          </div>
          </div>
          <Footer />
        </FadeIn>
        <Particles />
        </>
      );
}