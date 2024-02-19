import { TrendingUp } from "lucide-react";
import React from "react";

interface Props {
  title: string;
}
const Card = ({ title }: Props) => {
  return (
    <div
      className="bg-radial bg-gray-400 bg-opacity-20 backdrop-blur-lg shadow-md text-white  p-4 rounded-xl 
      w-[250px] h-[280px]
      "
    >
      <p className="text-sm text-gray-300">
        Last practice Linear etc etc
        <span>28/02/23</span>
      </p>
      <TrendingUp size={100} />
      <p className="text-4xl">{title}</p>
      <p className="text-sm text-gray-200 mt-5">
        A description of the above parameter goes here.
      </p>
    </div>
  );
};

export default Card;
