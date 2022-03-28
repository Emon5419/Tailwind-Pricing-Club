import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "premium", price: 19.99 },
  ];
  return (
    <div className="p-4 m-10 border-4 border-blue-500">
      <h1 className="text-6xl font-mono text-yellow-500">Best Deals</h1>
      <p className="mt-2 font-mono">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem
        veritatis delectus soluta accusamus. Repudiandae enim iste unde qui
        fugit dicta quidem dignissimos id tempora explicabo molestiae, modi
        mollitia debitis!
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
