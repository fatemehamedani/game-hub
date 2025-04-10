import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
// import Theme from "./Theme";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div
      className="grid w-screen"
      style={{
        gridTemplateAreas: `"nav nav" "aside main"`,
        gridTemplateColumns: "170px 1fr",
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
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </div>
      <div
        className="py-2 w-full flex justify-center"
        style={{ gridArea: "main" }}
      >
        <PlatformSelector/>
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  );
};

export default App;
