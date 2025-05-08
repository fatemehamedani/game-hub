import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../Services/api-client";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platforms>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
