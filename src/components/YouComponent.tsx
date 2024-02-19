import { AwardIcon } from "lucide-react";

interface Props {
  index: string;
  name: string;
}

const YouComponent = ({ name, index }: Props) => {
  return (
    <div className="flex flex-row items-center p-2 justify-between bg-radial bg-gradient-to-b from-you-component-top to-you-component-bottom bg-opacity-20 backdrop-blur-lg shadow-md text-white rounded-xl  h-12 w-full">
      <p className="flex flex-row gap-2">
        <span className="text-cutome-line-color text-sm font-semibold">
          {index}
        </span>{" "}
        <AwardIcon size={20} />
        <span className="w-4 h-4 rounded-full bg-gray-200"></span>
        <span className="text-sm">{name}</span>
      </p>
      <p className="text-sm">
        0/239 <span className="text-cutome-line-color text-sm">XP</span>
      </p>
    </div>
  );
};

export default YouComponent;
