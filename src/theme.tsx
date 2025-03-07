import { MdDarkMode } from "react-icons/md";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");

    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  const toggleDisplayMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("displayMode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("displayMode", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <MdDarkMode
      onClick={toggleDisplayMode}
      className={`text-3xl cursor-pointer transition-colors duration-300 ${
        darkMode ? "text-white" : "text-black"
      }`}
    />
  );
};

export default Theme;
