interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getColor =
    score > 75 ? "bg-green-800" : score > 60 ? "bg-yellow-500" : "";
  return (
    <div className="flex px-96 -mt-7">
      <span className={`px-2 text-white text-sm font-bold rounded ${getColor}`}>
        {score}
      </span>
    </div>
  );
};

export default CriticScore;
