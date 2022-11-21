export const capitalizeFirstLetter = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
const calculateNet = (gross, tax = 0.15) => {
  return (gross - gross * tax).toFixed(2);
};
const calculateTax = (gross, tax = 0.15) => {
  return (gross * tax).toFixed(2);
};

export const calculateForPeriod = (period, income) => {
  let baseGrossAmount;
  if (period === "weekly") baseGrossAmount = income / 52;
  if (period === "fortnightly") baseGrossAmount = income / 26;
  if (period === "monthly") baseGrossAmount = income / 12;
  if (period === "annualy") baseGrossAmount = income;
  let newObject = {
    gross: baseGrossAmount,
    tax: calculateTax(baseGrossAmount, 0.15),
    net: calculateNet(baseGrossAmount, 0.15),
  };
  return newObject;
};

export const getEntries = (obj) => {
  let array = obj.map((el) => Object.entries(el));
  console.log(array, "ARRRAYZ");
  return array;
};
