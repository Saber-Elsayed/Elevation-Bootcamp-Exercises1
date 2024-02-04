import React, { useState } from "react";
function Application() {
  const [temperature, setTemperature] = useState("hot");
  const toggleTemperature = () => {
    setTemperature(temperature === "hot" ? "cold" : "hot");
  };

  const Hot = () => {
    return (
      <div>
        <h2>I'm feeling too hot!</h2>
      </div>
    );
  };

  const Cold = () => {
    return (
      <div>
        <h2>It's too cold in here!</h2>
      </div>
    );
  };
  return (
    <div className="App">
      {temperature == "hot" ? <Hot /> : <Cold />}
      <button onClick={toggleTemperature}>Change Temp!</button>
    </div>
  );
}

export default Application;
