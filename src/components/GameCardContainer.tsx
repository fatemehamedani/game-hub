import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="bg-gray-800 w-96 rounded-lg overflow-hidden shadow-md mr-4">
      {children}
    </div>
  );
};

export default GameCardContainer;
