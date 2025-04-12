const LinkButton = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <span className="left-icon">{icon}</span>
      <span className="link-text">{text}</span>
    </a>
  );
};

export default LinkButton;
