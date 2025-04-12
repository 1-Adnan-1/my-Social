import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/adnan.altns/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/1ADnanSAmi1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://wa.me/905304888175?text=Selam%20Adnan%2C%20portfolio%20sayfandan%20geldim!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default SocialLinks;
