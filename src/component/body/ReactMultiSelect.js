import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "All", value: "all" },
];

const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ textAlign: "left", border: "0px" }}>
      {/* <h1>Select Fruits</h1> */}
      {/* <pre>{JSON.stringify(selected)}</pre> */}

      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Example;
