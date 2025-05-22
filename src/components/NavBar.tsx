import { HiOutlineCube } from "react-icons/hi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="flex justify-between items-center w-full"
      style={{ gridArea: "nav" }}
    >
      <Link to="/">
        <HiOutlineCube className="text-5xl" />
      </Link>
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
