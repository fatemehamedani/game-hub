import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DefinitionItem term="Genre">
          {game.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <p key={publisher.id}>{publisher.name}</p>
          ))}
        </DefinitionItem>
      </div>
    </div>
  );
};

export default GameAttributes;
