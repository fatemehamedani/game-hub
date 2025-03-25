import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { Data, error, isLoading } = useGame();
  const column = 4;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8,9];

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div
        className={`grid gap-6 w-full px-10 py-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${column}`}
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeletons} />
            </GameCardContainer>
          ))}
        {Data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
