import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList"; 
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <img
        className="w-full h-48 object-cover"
        src={game.background_image}
        alt={game.name}
      />
      <div className="p-2">
        <h2 className="text-white text-lg font-bold">{game.name}</h2>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCard;
