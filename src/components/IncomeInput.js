import React, { forwardRef } from "react";
import DropdownList from "./DropdownList";

const IncomeInput = forwardRef(
  (
    { inputValue, setInputValue, period, setPeriod, styling = "" },
    inputRef
  ) => {
    const periodArray = ["Weekly", "Fortnightly", "Monthly", "Annualy"];

    const addCommas = (input) =>
      input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (input) => input.toString().replace(/[^0-9]/g, "");

    const handleChange = (event) => {
      setInputValue(addCommas(removeNonNumeric(event.target.value)));
    };

    return (
      <div className={`${styling}`}>
        <div className="flex border-2 border-blue-400 focus-within:border-blue-600  m-1 items-center rounded-xl mx-2  h-full">
          <p className="m-1 ml-4 text-2xl">$</p>
          <input
            type="text"
            maxLength={15}
            className="mx-2 focus-visible:outline-0 w-full "
            value={inputValue || ""}
            placeholder="$15,000"
            onInput={handleChange}
            ref={inputRef}
          ></input>
          <DropdownList
            items={periodArray}
            period={period}
            setPeriod={setPeriod}
            styling="h-full w-1/4 "
            buttonStyling="bg-gray-200 w-full rounded-lg"
          />
        </div>
      </div>
    );
  }
);

export default IncomeInput;
