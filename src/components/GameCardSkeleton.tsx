const GameCardSkeleton = () => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 w-96 mr-4">
      <div className="w-full h-48 bg-gray-700 animate-pulse rounded-md"></div>
      <div className="mt-7">
        <div className="h-4 bg-gray-700 animate-pulse rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
