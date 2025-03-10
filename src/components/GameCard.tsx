import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-48 object-cover"
        src={game.background_image}
        alt={game.name}
      />
      <div className="p-2">
        <h2 className="text-white text-lg font-bold">{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
