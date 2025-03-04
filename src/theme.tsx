import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 text-lg rounded-full bg-gray-800 text-white hover:bg-gray-600"
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Theme;
