import { HiOutlineCube } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="flex items-center" style={{ gridArea: "nav" }}>
      <HiOutlineCube className="text-5xl" />
      <h1>NavBar</h1>
    </div>
  );
};

export default NavBar;
