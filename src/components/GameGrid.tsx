import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
