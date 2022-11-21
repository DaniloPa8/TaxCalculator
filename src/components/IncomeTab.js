import React, { useState } from "react";

import Download from "../Graphics/Download";
import Banner from "./Banner";
import Button from "./Button";
import DropdownList from "./DropdownList";
import Heading from "./Heading";
import IncomeTable from "./IncomeTable";

const IncomeTab = ({ totalAnnual, period, setPeriod }) => {
  const [annualNet, setAnnualNet] = useState(0);
  const periodArray = ["weekly", "fortnightly", "monthly", "annualy"];

  return (
    <div className="flex-box flex-row h-full w-full border-2 border-l-0 border-black-200 ">
      <Heading styling="h-[15%] w-full" />
      <Button styling="absolute right-[5%] top-[3.5%] w-[15%] h-[10%] rounded-xl bg-white border-2 border-gray-200 text-green-500   flex justify-center items-center">
        <Download /> Download
      </Button>
      <div className="h-3/5 w-[95%] mx-auto bg-cyan-200 rounded-xl">
        <div className="w-[90%] h-1/5  mx-auto flex items-center">
          <div className="h-3/5 w-1/5 my-auto  bg-green-500 rounded-xl flex items-center justify-center">
            <p className="text-center font-bold  ">{`$${annualNet.toLocaleString()}`}</p>
          </div>
          <p className="w-[10%] lg:w-auto ml-4">your net </p>
          <DropdownList
            period={period}
            setPeriod={setPeriod}
            items={periodArray}
            styling=" mx-1"
            listStyling="absolute bg-white rounded-l border-2 border-gray-400  before:bottom-[100.5%]"
            buttonStyling="w-[8%]"
          />

          <p className="relative ">income</p>
        </div>
        <div className="h-3/4 w-[90%] mx-auto  p-4 bg-white rounded-xl">
          <IncomeTable
            headers={["Frequency", "Gross Income", "Tax", "Net Income"]}
            totalAnnual={totalAnnual}
            setAnnualNet={setAnnualNet}
            annualNet={annualNet}
            selectedPeriod={period}
          />
        </div>
      </div>
      <Banner styling="h-1/5" />
    </div>
  );
};

export default IncomeTab;
