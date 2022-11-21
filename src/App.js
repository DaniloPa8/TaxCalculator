import React, { useEffect, useRef, useState } from "react";
import "./app.css";
import IncomeDetails from "./components/IncomeDetails";
import IncomeTab from "./components/IncomeTab";
import SideTab from "./components/SideTab";

const App = () => {
  const [sideTab, setSideTab] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [period, setPeriod] = useState(0);
  const [totalAnnual, setTotalAnnual] = useState();
  const [selectedButton, setSelectedButton] = useState();

  const incomeDetailsRef = useRef();

  const calculateTax = (_input, period, gross) => {
    let input = parseInt(_input.replace(/\,/g, ""));
    if (input <= 0) return;

    let total;
    switch (period) {
      case 0:
        total = input * 52;
        break;
      case 1:
        total = input * 26;
        break;
      case 2:
        total = input * 12;
        break;
      case 3:
        total = input;
        break;
      default:
        total = 10000;
        break;
    }

    if (!gross) total = total * (100 / (100 - 15));

    setTotalAnnual(total);
    setSideTab(1);
  };

  const focusInput = () => {
    if (!inputValue) incomeDetailsRef.current.input.focus();
    else if (inputValue && !selectedButton)
      incomeDetailsRef.current.buttons.focus();
  };

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center ">
      <div className="absolute top-32 flex  lg:h-[70%] lg:w-3/5 h-[70vw] w-[95%] ">
        <div className=" h-full w-16 rounded-l-xl ">
          <SideTab
            title="Income details"
            onClick={() => setSideTab(0)}
            styling={`rounded-tl-xl ${
              sideTab ? "bg-green-200" : "bg-green-400"
            }`}
          />
          <SideTab
            title="Income"
            styling={` rounded-bl-xl ${
              sideTab ? "bg-green-400" : "bg-green-200"
            }`}
            onClick={() => (totalAnnual ? setSideTab(1) : focusInput())}
          />
        </div>
        <div className="w-full h-full shadow-[0px_-2px_5px_5px_rgba(0,0,0,0.1)] rounded-tr-lg rounded-br-lg rounded-bl-lg ">
          {sideTab === 0 && (
            <IncomeDetails
              inputValue={inputValue}
              setInputValue={setInputValue}
              period={period}
              setPeriod={setPeriod}
              calculateTax={calculateTax}
              ref={incomeDetailsRef}
              focusInput={focusInput}
              setSelectedButton={setSelectedButton}
              selectedButton={selectedButton}
            />
          )}
          {sideTab === 1 && (
            <IncomeTab
              period={period}
              setPeriod={setPeriod}
              totalAnnual={totalAnnual}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
