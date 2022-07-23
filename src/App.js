import React from "react";
import WheatherForecast from "./components/WheatherForecast";
import "./App.css";
import SearchWeather from "./components/SearchWeather";

// class 

function App() {
  return (
    <div className="App">
      <SearchWeather />
      {/* <WheatherForecast /> */}
    </div>
  );
}

export default App;
