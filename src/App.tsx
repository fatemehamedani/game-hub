import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
// import Theme from "./Theme";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
        {/* <Theme /> */}
      </div>
      <div className="py-2 flex justify-center" style={{ gridArea: "aside" }}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
      <div className="py-2 w-full flex flex-col " style={{ gridArea: "main" }}>
        <GameHeading gameQuery={gameQuery} />
        <div className="w-full flex justify-start px-10">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            className=""
          />
          <div className="w-full flex justify-start px-5">
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              className=""
            />
          </div>
        </div>
        <div className="w-full">
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
