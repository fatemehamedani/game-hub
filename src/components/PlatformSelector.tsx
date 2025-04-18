import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
  className?: string;
}

const PlatformSelector = ({
  className,
  selectedPlatform,
  onSelectedPlatform,
}: Props) => {
  const { Data } = usePlatforms();
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-48 relative${className}`}>
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
            {Data.map((platform) => (
              <button
                key={platform.id}
                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-100 focus:outline-none text-left"
                onClick={() => {
                  onSelectedPlatform(platform), setOpen(false);
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
