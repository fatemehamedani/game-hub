import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div className="mx-2 py-4">
      <dt className="font-medium text-gray-600 mb-1">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
