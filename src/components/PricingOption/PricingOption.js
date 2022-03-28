import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="p-4 rounded-lg border-4 border-red-600 bg-slate-200">
      <h1 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h1>
      <p className="text-5xl font-bold">
        <span>${price}</span>
        <span className="text-xl font-bold text-gray-400">/Per-Month</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="text-white w-full bg-green-500 flex justify-center items-center py-2 rounded mt-3 hover:text-black hover:font-bold">
        Buy Now <ArrowRightIcon className="ml-2 w-5 h-5"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
