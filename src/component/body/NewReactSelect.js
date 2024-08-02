import React, { useState } from "react";
import Select, { components } from "react-select";

const options = [
  { value: "RECOMMENDED", label: "RECOMMENDED" },
  { value: "NEWEST FIRST", label: "NEWEST FIRST" },
  { value: "POPULAR", label: "POPULAR" },
  { value: "PRICE : HIGH TO LOW", label: "HIGH" },
  { value: "PRICE : LOW TO HIGH", label: "LOW" },
];

// Custom option component
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.isSelected && <span style={{ marginRight: 10 }}>✔</span>}
        {props.data.label}
      </div>
    </components.Option>
  );
};

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="selectBox">
      <Select
        // menuIsOpen={true}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        components={{ Option: CustomOption }}
      />
    </div>
  );
}
