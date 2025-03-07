import "./App.css";
import NavBar from "./components/NavBar";
import Theme from "./theme";

const App = () => {
  return (
    <div
      className="grid w-screen"
      style={{
        gridTemplateAreas: `"nav nav" "aside main"`,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto 2fr",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ gridArea: "nav" }}
      >
        <NavBar />
        <Theme />
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
