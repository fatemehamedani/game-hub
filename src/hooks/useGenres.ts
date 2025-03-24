import useDate from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useDate<Genre>("/genres");

export default useGenres;
