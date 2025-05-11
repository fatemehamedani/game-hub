import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

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
    <h1>
      <header className="text-3xl font-medium px-4">Genre</header>
      <div className="w-48 text-white h-screen p-4 ">
        <ul className="space-y-4">
          {data?.results.map((genre: Genre) => (
            <li
              className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
              key={genre.id}
            >
              <img
                className="w-8 h-8 rounded-md object-cover"
                src={genre.image_background}
                alt={genre.name}
              />
              <p
                onClick={() => onSelectGenre(genre)}
                className={`text-sm text-gray-900 dark:text-gray-400 ${
                  selectedGenreId === genre.id
                    ? "text-blue-500 font-bold underline"
                    : "text-gray-900"
                }`}
              >
                {genre.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </h1>
  );
};

export default GenreList;
