import "./App.css";
import NavBar from "./components/NavBar";
import { HiOutlineCube } from "react-icons/hi";

const App = () => {
  return (
    <div
      className="grid w-screen
    "
      style={{
        gridTemplateAreas: `"nav nav" "aside main"`,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto 2fr",
      }}
    >
      <div
        className="bg-amber-600 py-2 flex items-center"
        style={{ gridArea: "nav" }}
      >
        <HiOutlineCube className="text-5xl" />

        <NavBar />
      </div>
      <div
        className="bg-amber-400 py-2 flex justify-center"
        style={{ gridArea: "aside" }}
      >
        Aside
      </div>
      <div
        className="bg-blue-600 py-2 flex justify-center"
        style={{ gridArea: "main" }}
      >
        Main
      </div>
    </div>
  );
};

export default App;
