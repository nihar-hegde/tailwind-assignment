import React from "react";
import NameComponent from "./NameComponent";
import YouComponent from "./YouComponent";

const LeaderBoard = () => {
  return (
    <div className="flex flex-col bg-radial bg-gray-400 bg-opacity-20 backdrop-blur-lg shadow-lg text-white rounded-xl  min-h-[250px] ">
      <p className="flex items-center start pl-5  bg-radial leaderboard-custome-gray bg-opacity-20 backdrop-blur-lg text-white rounded-xl h-12 w-full">
        Leaderboard
      </p>
      <div className="flex flex-col items-center p-2 gap-2">
        <NameComponent name="Name" index="01." />
        <NameComponent name="Name" index="02." />
        <NameComponent name="Name" index="03." />
        <YouComponent name="You" index="58." />
      </div>
    </div>
  );
};

export default LeaderBoard;
