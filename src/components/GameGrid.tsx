import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { Data, error, isLoading } = useGame(gameQuery);
  const column = { sm: 1, md: 2, lg: 3, xl: 4 };
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div
        className={`grid gap-6 w-full px-10 py-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${column}`}
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer key={skeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {Data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
