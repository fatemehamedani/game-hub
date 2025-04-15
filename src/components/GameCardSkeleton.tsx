const GameCardSkeleton = () => {
  return (
    <div>
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>
      <div className="mt-7">
        <div className="h-4 bg-gray-700 animate-pulse rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
