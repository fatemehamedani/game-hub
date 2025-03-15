import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const columns = 4;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-10 w-full px-4 py-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          skeletons.map((skeletons) => <GameCardSkeleton key={skeletons} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
