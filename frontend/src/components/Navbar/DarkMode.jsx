import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("light") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme == "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative ">
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-7 cursor-pointer absolute right-0 z-10 
      ${
        theme == "dark" ? "opacity-0" : "opacity-100"
      } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-7 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
