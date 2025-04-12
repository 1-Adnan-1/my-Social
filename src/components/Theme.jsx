import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const [buttonSize, setButtonSize] = useState(50);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setButtonSize(40);
      } else {
        setButtonSize(50);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: theme === "dark" ? "#FFD700" : "#000000",
        fontSize: "24px",
        padding: "10px",
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        borderRadius: "50%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      {theme === "dark" ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
    </button>
  );
};

export default Theme;
