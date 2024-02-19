import React from "react";
import NewThread from "./NewThread";
import Streak from "./Streak";
import CircularProgressBar from "./Streak";
import { AwardIcon, Badge, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import LeaderBoard from "./LeaderBoard";

const LeftSidebar = () => {
  return (
    <section
      className="sticky left-0 top-0 flex h-screen flex-col bg-gradient-to-b from-custom-dark-green to-custom-dark-gray
      justify-between overflow-y-auto p-6  shadow-md max-sm:hidden lg:w-[350px] 
    "
    >
      <div className="flex flex-col flex-1 gap-6">
        <div className="flex flex-row items-center  gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          <h1 className="text-2xl text-gray-200">
            Chat<span className="font-bold">SAT</span>
          </h1>
        </div>
        <NewThread />
        <div className="flex items-center  bg-radial bg-gray-400 bg-opacity-20 backdrop-blur-lg shadow-lg text-white rounded-xl">
          <CircularProgressBar dayOfWeek={4} />
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center">
              <AwardIcon size={36} className="text-cutome-line-color" />
              <span className="text-xl font-bold">
                0/233 <span className="text-cutome-line-color">XP</span>
              </span>
            </div>
            <Button className="text-cutome-line-color bg-custom-button-bg">
              Take a Quiz
            </Button>
          </div>
        </div>
        <LeaderBoard />
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>{" "}
          <span className="text-gray-200 text-xl">Name</span>
        </div>
        <div className="flex gap-2">
          <LogOut className="transform rotate-180 text-gray-300" />
          <p className="text-gray-200">Sign Out</p>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
