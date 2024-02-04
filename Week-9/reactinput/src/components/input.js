import React, { useState } from "react";

const InputTest = () => {
  const [text, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const updateText = (event) => {
    setInputValue(event.target);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  return (
    <div>
      <input type="text" value={text} onChange={updateText} />
      <input
        type="checkbox"
        checked={checkboxValue}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default InputTest;
