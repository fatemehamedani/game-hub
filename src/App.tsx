import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
// import Theme from "./Theme";

const App = () => {
  return (
    <div
      className="grid w-screen"
      style={{
        gridTemplateAreas: `"nav nav" "aside main"`,
        gridTemplateColumns: "170px 1fr",
        gridTemplateRows: "auto 2fr",
      }}
    >
      <div className="w-full" style={{ gridArea: "nav" }}>
        <NavBar />
        {/* <Theme /> */}
      </div>
      <div className="py-2 flex justify-center" style={{ gridArea: "aside" }}>
        <GenreList />
      </div>
      <div className="py-2 w-full flex flex-col " style={{ gridArea: "main" }}>
        <GameHeading />
        <div className="w-full flex justify-start px-10">
          <PlatformSelector />
          <div className="w-full flex justify-start px-5">
            <SortSelector />
          </div>
        </div>
        <div className="w-full">
          <GameGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
