import { useState } from "react";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
  className?: string;
}

const SortSelector = ({ className, onSelectSortOrder, sortOrder }: Props) => {
  const [showDropdown, setShowDropDown] = useState(false);

  const toggleDropdown = () => {
    setShowDropDown((prev) => !prev);
  };

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div className={`w-60 relative${className}`}>
      <button
        onClick={toggleDropdown}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-white bg-gray-800 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        type="button"
      >
        Order by : {currentSortOrder?.value || "Relevance"}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1 L5 5 L9 1"
          />
        </svg>
      </button>

      {showDropdown && (
        <div
          id="dropdown"
          className="z-10 absolute mt-2 bg-white rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          {sortOrders.map((order) => (
            <button
              className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-100 focus:outline-none text-left"
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
            >
              {order.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelector;
