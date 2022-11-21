import React, { useRef, useState } from "react";

const DropdownList = ({
  items = [],
  styling = "",
  listStyling = "",
  buttonStyling = "",
  period,
  setPeriod,
}) => {
  const dropdownRef = useRef();

  const [dropVisible, setDropVisible] = useState(false);

  const openDropdown = () => {
    setDropVisible((prev) => !prev);
    document.addEventListener("mousedown", handleClickOutside);
  };
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropVisible(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };
  const makeSelection = (selected) => {
    setPeriod(selected);
    setDropVisible(false);
    document.removeEventListener("mousedown", handleClickOutside);
  };

  return (
    <div className={`${styling}`}>
      <button
        className={`border-0 underline h-full ${buttonStyling}`}
        onClick={() => openDropdown()}
      >
        {`${items[period]}`}&#x21b4;
      </button>
      {dropVisible && (
        <ul
          className={`list absolute block z-5 border border-gray-200  before:absolute  before:left-[50%] before:bottom-[100%] before:h-[0px] before:w-[0px] before:border-r-[5px] before:border-r-transparent before:border-l-[5px] before:border-l-transparent before:border-b-[5px] before:border-b-gray-500 ${listStyling} `}
          ref={dropdownRef}
        >
          {items.map((el, i) => (
            <li
              onClick={() => makeSelection(i)}
              className="p-2 bg-white hover:bg-gray-200 w-full cursor-default"
              key={i}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
