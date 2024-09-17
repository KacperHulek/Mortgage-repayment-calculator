import React from "react";
import MortgageType from "../MortgageType/MortgageType";

const MortgageTypeList = ({ mortgageTypes, title, onChange }) => {
  return (
    <>
      <h2 className="col-span-4 text-slate-700 mt-4">{title}</h2>
      <ul className="space-y-2 col-span-4">
        {mortgageTypes.map((type) => (
          <MortgageType
            key={type.value}
            {...type}
            onChange={() => onChange(type.value)}
          />
        ))}
      </ul>
    </>
  );
};

export default MortgageTypeList;
