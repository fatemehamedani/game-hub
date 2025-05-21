import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.results.map((file) => (
        <img className="w-full rounded-lg" key={file.id} src={file.image} />
      ))}
    </div>
  );
};

export default GameScreenShots;
