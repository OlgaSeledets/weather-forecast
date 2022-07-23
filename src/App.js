import React, {useState} from "react";
import Info from "./components/Info";
import WheatherForecast from "./components/WheatherForecast";
import "./App.css";

// class 

function App() {
  return (
    <div className="App">
      <Info />
      <WheatherForecast />
    </div>
  );
}

export default App;
