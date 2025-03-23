import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
// import Theme from "./Theme";

const App = () => {
  return (
    <div
      className="grid w-screen"
      style={{
        gridTemplateAreas: `"nav nav" "aside main"`,
        gridTemplateColumns: "200px 1fr",
        gridTemplateRows: "auto 2fr",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ gridArea: "nav" }}
      >
        <NavBar />
        {/* <Theme /> */}
      </div>
      <div className="py-2 flex justify-center" style={{ gridArea: "aside" }}>
        <GenreList />
      </div>
      <div
        className="py-2 w-full flex justify-center"
        style={{ gridArea: "main" }}
      >
        <GameGrid />
      </div>
    </div>
  );
};

export default App;
