import useDate from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useDate<Genre>("/genres");

export default useGenres;
