import React from "react";
const SelectZone = ({ setZone, countries }) => {
  return (
    <div className="content-container">
      {/* select goes here  */}
      <select
        data-testid="select-element"
        onChange={(e) => {
          setZone(e.target.value);
        }}
      >
        {countries.map((country) => (
          <option value={country.zone} key={country.id}>
            {country.capital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectZone;
