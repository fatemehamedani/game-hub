import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const [toggleColorMode, setToggleColorMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("displayMode");

    if (savedMode === "dark") {
      setToggleColorMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setToggleColorMode(false);
      document.documentElement.classList.remove("dark");
    }
    setToggleColorMode(savedMode === "dark" ? true : false);
  }, []);

  const toggleDisplayMode = () => {
    if (toggleColorMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("displayMode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("displayMode", "dark");
    }
    setToggleColorMode(!toggleColorMode);
  };

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleDisplayMode}
          checked={toggleColorMode}
        />
        <div className="relative w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 dark:bg-gray-700">
          <div
            className={`absolute top-[2px] start-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all ${
              toggleColorMode ? "translate-x-4 bg-blue-500" : ""
            }`}
          ></div>
        </div>
        {toggleColorMode ? "Dark Mode" : "Light Mode"}
        <span className="ms-2.5 text-sm font-medium text-gray-900 dark:text-gray-400"></span>
      </label>
    </div>
  );
};

export default ColorModeSwitch;
