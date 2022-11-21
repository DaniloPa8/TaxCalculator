import React from "react";

const SideTab = ({ title = "Card", styling = "", ...tabProps }) => {
  return (
    <div
      className={`h-1/3 w-full mb-4 mt-2 rounded-tl-xl rounded-bl-xl ${styling}`}
      {...tabProps}
    >
      <p className=" w-1/2 h-full vertical-writing-lr rotate-180 text-sm text-center font-semibold mx-2">
        {title}
      </p>
    </div>
  );
};

export default SideTab;
