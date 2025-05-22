import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import GameScreenShots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>Loading ...</p>;

  if (error || !game) throw error;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <header className="py-1.5 mx-1 text-xl font-bold">{game.name}</header>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>

      <div>
        <GameTrailer gameId={game.id} />
        <div className="mt-4">
          <GameScreenShots gameId={game.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
