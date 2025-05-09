import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";

const apiClient = new APIClient<Platform>("platforms");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
