import React from "react";
import ThreeHouseIcon from "../Graphics/ThreeHousesIcon";
import Button from "./Button";
const Banner = ({ styling = "" }) => {
  return (
    <div
      className={`w-[95%] m-auto bg-orange-200 flex items-center px-8 rounded-xl mt-2 ${styling}`}
    >
      <ThreeHouseIcon styling="mt-6" />
      <p className="w-[70%] text-center text-xl">
        Compare lenders and get your finance
      </p>
      <Button styling="w-1/4 bg-green-500 w-full h-1/2 rounded-xl text-white">
        Apply Now
      </Button>
    </div>
  );
};

export default Banner;
