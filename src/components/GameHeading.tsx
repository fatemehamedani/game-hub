import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <div>
      <h1 className="px-11 py-2 font-medium text-3xl">{heading}</h1>
    </div>
  );
};

export default GameHeading;
