import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105">
      {children}
    </div>
  );
};

export default GameCardContainer;
