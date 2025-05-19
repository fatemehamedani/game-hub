import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>Loading ...</p>;

  if (error || !game) throw error;

  return (
    <>
      <header className="py-1.5 mx-1">{game.name}</header>
      <p className="py-1.5 mx-1 font-medium">{game.description_raw}</p>
    </>
  );
};

export default GameDetailPage;
