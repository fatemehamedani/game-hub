import { HiOutlineCube } from "react-icons/hi";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div
      className="flex justify-between items-center w-full"
      style={{ gridArea: "nav" }}
    >
      <HiOutlineCube className="text-5xl" />
      <h1>NavBar</h1>
      <div className="ml-auto">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
