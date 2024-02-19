import React from "react";

const CircularProgressBar = ({ dayOfWeek }: { dayOfWeek: number }) => {
  // Calculate progress percentage directly within the calculateStrokeDashoffset function
  const calculateStrokeDashoffset = () => {
    const progress = dayOfWeek / 7;
    // Invert progress to represent remaining portion
    return 2 * Math.PI * 25 - progress * 2 * Math.PI * 25;
  };
  const textStyle = {
    color: "#edff86",
  };

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className=" stroke-current"
          style={{ stroke: "#384440" }}
          strokeWidth="5"
          cx="50"
          cy="50"
          r="25"
          fill="transparent"
        />

        <circle
          className=" progress-ring__circle stroke-current"
          strokeWidth="5"
          style={{ stroke: "#edff86" }}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="25"
          fill="transparent"
          strokeDasharray={`${2 * Math.PI * 25} ${2 * Math.PI * 25}`} // Added stroke-dasharray
          strokeDashoffset={calculateStrokeDashoffset()}
        />
        <text
          className="fill-current font-bold"
          style={textStyle}
          x="50"
          y="45"
          //font-family="Verdana"
          fontSize="10"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {`${dayOfWeek}/7`}
        </text>
        <text
          className="fill-current text-white  font-semibold"
          x="50"
          y="57"
          fontSize={"9"}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          Streak
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
