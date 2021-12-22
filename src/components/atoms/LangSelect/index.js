import React from "react";

function LangSelect({ options, selected, handleClick }) {
  return (
    <select
      className="form-select"
      defaultValue={selected}
      aria-label="Default select example"
      onChange={(e) => handleClick(e.target.value)}
    >
      {options &&
        Object.keys(options).map((o, idx) => {
          return (
            <option key={o} value={o}>
              {options[o].nativeName}
            </option>
          );
        })}
    </select>
  );
}

export default LangSelect;
