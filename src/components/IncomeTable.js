import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, getEntries } from "../utils/utils";
import { v4 as uuid } from "uuid";

const defaultData = [
  { weekly: { gross: 0, tax: 0, net: 0 } },
  {
    fortnightly: {
      gross: 0,
      tax: 0,
      net: 0,
    },
  },
  {
    monthly: {
      gross: 0,
      tax: 0,
      net: 0,
    },
  },
  {
    annualy: {
      gross: 0,
      tax: 0,
      net: 0,
    },
  },
];

const IncomeTable = ({
  headers,
  totalAnnual,
  annualNet,
  setAnnualNet,
  selectedPeriod,
}) => {
  let data = getEntries(defaultData);
  const [displayData, setDisplayData] = useState(getEntries(defaultData));

  useEffect(() => {
    totalAnnual &&
      data.forEach((el) => {
        el[0][1] = calculateForPeriod(el[0][0], totalAnnual);
      });

    setDisplayData(data);
  }, [totalAnnual]);

  useEffect(() => {
    const net = displayData
      .map((el) => Object.fromEntries(el))
      .filter((el) => el["annualy"]);
    if (net) {
      let netValue = net[0].annualy.net;
      let finalValue;
      if (selectedPeriod === 0) finalValue = netValue / 52;
      if (selectedPeriod === 1) finalValue = netValue / 26;
      if (selectedPeriod === 2) finalValue = netValue / 12;
      if (selectedPeriod === 3) finalValue = netValue;
      setAnnualNet(Math.floor(finalValue));
    }
  }, [annualNet, displayData, selectedPeriod]);

  const calculateForPeriod = (period, income) => {
    const calculateNet = (gross, tax = 0.15) => {
      return Math.floor(gross - gross * tax);
    };

    const calculateTax = (gross, tax = 0.15) => {
      return Math.floor(gross * tax);
    };

    let baseGrossAmount;
    if (period === "weekly") baseGrossAmount = income / 52;
    if (period === "fortnightly") baseGrossAmount = income / 26;
    if (period === "monthly") baseGrossAmount = income / 12;
    if (period === "annualy") baseGrossAmount = income;
    let newObject = {
      gross: baseGrossAmount ? Math.floor(baseGrossAmount) : 0,
      tax: calculateTax(baseGrossAmount, 0.15),
      net: calculateNet(baseGrossAmount, 0.15),
    };

    return newObject;
  };

  return (
    <table className="w-full h-full text-left border-seperate border-spacing-y-4 mx-auto cursor-default ">
      <thead>
        <tr className="">
          {headers.map((el) => (
            <th className="" key={el}>
              {capitalizeFirstLetter(el)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {displayData.map((el, i) => (
          <tr className="border-t-2  border-green-300 hover:bg-blue-200 rounded-lg">
            <td key={el[0][0]}>{capitalizeFirstLetter(el[0][0])}</td>
            <td key={uuid()}>{`$${el[0][1].gross.toLocaleString()}`}</td>
            <td key={uuid()}>{`$${el[0][1].tax.toLocaleString()}`}</td>
            <td key={uuid()}>{`$${el[0][1].net.toLocaleString()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IncomeTable;
