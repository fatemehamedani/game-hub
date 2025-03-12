import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  const columns = 4;

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-10 w-full px-4 py-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
