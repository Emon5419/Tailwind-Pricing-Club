import React from "react";

const PricingOption = (props) => {
  const { name, price } = props.option;
  return (
    <div className="p-4 rounded-lg">
      <h1 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h1>
      <p className="text-5xl font-bold">
        <span>${price}</span>
        <span className="text-xl font-bold text-gray-400">/Per-Month</span>
      </p>
    </div>
  );
};

export default PricingOption;
