import "./index.css";
import ProfileHeader from "./components/ProfileHeader";
import SocialLinks from "./components/SocialLink";
import LinkButton from "./components/LinkButton";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaGlobe,
  FaFilePdf, // PDF simgesi için yeni bir icon ekledik
} from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <ProfileHeader />
      <SocialLinks />
      <div className="links">
        <LinkButton
          icon={<FaGithub />}
          text="Github"
          link="https://github.com/1-Adnan-1"
        />
        <LinkButton
          icon={<FaLinkedin />}
          text="Linkedin"
          link="https://www.linkedin.com/in/adnansamialt%C4%B1nta%C5%9F/"
        />
        <LinkButton
          icon={<FaXTwitter />}
          text="X"
          link="https://x.com/1ADnanSAmi1"
        />
        <LinkButton
          icon={<FaWhatsapp />}
          text="WhatsApp"
          link="https://wa.me/905304888175?text=Selam%20Adnan%2C%20portfolio%20sayfandan%20geldim!"
        />
        <LinkButton
          icon={<FaGlobe />}
          text="Portfolio"
          link="http://byadnansami.com/"
        />
        <LinkButton icon={<FaFilePdf />} text="CV" link="/cv.pdf" />
      </div>
    </div>
  );
}

export default App;
