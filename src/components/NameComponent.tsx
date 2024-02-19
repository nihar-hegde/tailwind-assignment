import { AwardIcon } from "lucide-react";
import React from "react";

interface Props {
  index: string;
  name: string;
}

const NameComponent = ({ name, index }: Props) => {
  return (
    <div className="flex flex-row items-center p-2 justify-between bg-radial bg-leaderboard-custome-gray bg-opacity-20 backdrop-blur-lg shadow-md text-white rounded-xl  h-12 w-full">
      <div className="flex flex-row gap-2">
        <span className="text-cutome-line-color text-sm font-semibold">
          {index}
        </span>{" "}
        <AwardIcon size={20} />
        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
        <p className="text-sm">{name}</p>
      </div>
      <p className="text-sm">
        0/239 <span className="text-cutome-line-color text-sm">XP</span>
      </p>
    </div>
  );
};

export default NameComponent;
