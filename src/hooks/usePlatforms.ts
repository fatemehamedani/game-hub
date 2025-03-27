import useDate from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useDate<Platforms>("/platforms/lists/parents");

export default usePlatforms;
