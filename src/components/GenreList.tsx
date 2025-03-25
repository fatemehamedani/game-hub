import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { Data, isLoading } = useGenres();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-48 h-screen">
        <div
          className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-transparent border-white rounded-full"
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <div className="w-48 text-white h-screen p-4 ">
      <ul className="space-y-4">
        {Data.map((genre) => (
          <li
            className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
            key={genre.id}
          >
            <img
              className="w-8 h-8 rounded-md object-cover"
              src={genre.image_background}
              alt={genre.name}
            />
            <p className="text-sm text-gray-900 dark:text-gray-400">
              {genre.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
