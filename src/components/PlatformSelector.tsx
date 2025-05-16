import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [open, setOpen] = useState(false);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return <div>{error.message}</div>;

  return (
    <div className="w-48 relative">
      <button
        className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-white bg-gray-800 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
        <RiArrowDropDownLine size={20} />
      </button>
      {open && (
        <div className="absolute right-0 z-10 w-full mt-2 bg-gray-800 border border-gray-800 rounded-md shadow-lg">
          <div className="py-1">
            {data?.results.map((platform) => (
              <button
                key={platform.id}
                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-100 focus:outline-none text-left"
                onClick={() => {
                  setSelectedPlatformId(platform.id), setOpen(false);
                }}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
