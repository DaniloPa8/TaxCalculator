import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";

import Button from "./Button";
import Heading from "./Heading";
import IncomeInput from "./IncomeInput";

const IncomeDetails = forwardRef(
  (
    {
      inputValue,
      setInputValue,
      period,
      setPeriod,
      calculateTax,
      focusInput,
      selectedButton,
      setSelectedButton,
    },
    ref
  ) => {
    const [gross, setGross] = useState(false);

    const selectButtonsRef = useRef();
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
      return {
        input: inputRef.current,
        buttons: selectButtonsRef.current,
      };
    });

    const selectGross = () => {
      if (inputValue <= 0) focusInput();
      else {
        setGross(true);
        setSelectedButton(1);
      }
    };

    const selectNet = () => {
      if (!inputValue) focusInput();
      else {
        setGross(false);
        setSelectedButton(2);
      }
    };

    const calculate = () => {
      if (inputValue && selectedButton) calculateTax(inputValue, period, gross);
      else if (!inputValue || !selectedButton) focusInput();
    };

    return (
      <div className="flex-box flex-row lg:h-4/5 lg:w-[65%] h-full w-full border-4 border-black-200 rounded-xl rounded-l-none">
        <div className="h-1/2 w-full">
          <Heading styling="h-[30%] w-full" />
          <div className="h-1/5" />
          <div className="h-1/2 mx-4">
            <p className=" mx-2 pt-2 w-3/4 h-1/2  text-xl">
              What is your total income?
            </p>

            <IncomeInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              period={period}
              setPeriod={setPeriod}
              styling="h-[50%]"
              ref={inputRef}
            />
          </div>
        </div>
        <div className="h-1/2 w-full m-0">
          <div className="w-full h-[30%] mx-8 items-center flex">
            <p
              className="text-xl my-auto focus:text-green-800 focus:font-semibold focus:underline"
              tabIndex={-1}
              ref={selectButtonsRef}
            >
              Please choose the income type
            </p>
          </div>
          <div className=" flex h-[30%] justify-center mx-4 ">
            <Button
              styling={`w-2/5 h-3/4 mr-2 border-2 border-black-600 rounded-xl ${
                selectedButton === 1 ? "bg-green-500 text-white" : "text-black"
              }`}
              onClick={() => selectGross()}
            >
              Gross Income
            </Button>

            <Button
              title=""
              styling={`w-1/2 h-3/4  ml-2 border-2 border-black-600 rounded-xl  ${
                selectedButton === 2 ? "bg-green-500 text-white" : "text-black"
              }`}
              onClick={() => selectNet()}
            >
              Net Income
            </Button>
          </div>
          <div className="flex items-center h-1/3 w-[95%] mx-auto justify-center ">
            <Button
              // disabled={!selectedButton}
              styling={`w-full h-3/4 mx-4 border-2 border-black-600 rounded-xl ${
                selectedButton ? "bg-green-500 text-white" : "bg-gray-400"
              }`}
              onClick={() => calculate()}
            >
              Calculate &#x27A0;
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default IncomeDetails;
