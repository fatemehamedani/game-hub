import { HiOutlineCube } from "react-icons/hi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div
      className="flex justify-between items-center w-full"
      style={{ gridArea: "nav" }}
    >
      <HiOutlineCube className="text-5xl" />
      <h1></h1>
      <div className="mx-auto px-7">
        <SearchInput />
      </div>
      <div className="ml-auto mr-4">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
