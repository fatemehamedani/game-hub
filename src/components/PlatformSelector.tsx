import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { RiArrowDropDownLine } from "react-icons/ri";

const PlatformSelector = () => {
  const { Data } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <div className="w-64">
      <div className="relative">
        <button
          className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          type="button"
        >
          {selectedPlatform ? selectedPlatform : "Platforms"}
          <RiArrowDropDownLine size={20} />
        </button>

        <div className="absolute right-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {Data.map((platform) => (
              <button
                key={platform.id}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                onClick={() => setSelectedPlatform(platform.name)}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
