import React from "react";
import HouseIcon from "../Graphics/HouseIcon";

const Heading = ({ styling = "" }) => {
  return (
    <div className={`${styling} flex mx-2 cursor-default items-center`}>
      <HouseIcon styling=" w-[10%]" />
      <h3 className=" w-[90%] text-3xl my-auto">Income tax calculator</h3>
    </div>
  );
};

export default Heading;
