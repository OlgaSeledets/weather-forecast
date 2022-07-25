import React from "react";
import "./App.css";
import Card from "./components/Card";
import SearchWeather from "./components/SearchWeather";

// class 

function App() {
  return (
    <div className="App">
      <SearchWeather />
      <Card />
    </div>
  );
}

export default App;
