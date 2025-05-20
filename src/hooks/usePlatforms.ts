import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../Services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default usePlatforms;
