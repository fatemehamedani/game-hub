import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      {children}
    </div>
  );
};

export default GameCardContainer;
