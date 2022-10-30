import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Technologies} from "./components/Technologies";

const App = () => {
  return (
      <div>
        <Header title={"Hello, samurai! Let's go!"}/>
        <Technologies />
      </div>
)
}

export default App;
