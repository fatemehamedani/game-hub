import { useState } from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  selectedPlatformId?: number;
  onSelectedPlatform: (platform: Platform) => void;
  className?: string;
}

const PlatformSelector = ({
  className,
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();
  const [open, setOpen] = useState(false);

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return <div>{error.message}</div>;

  return (
    <div className={`w-48 relative ${className}`}>
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
