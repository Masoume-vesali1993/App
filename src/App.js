import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = "598f79df";
  const APP_KEY = "6b084ce5a194500f083460330ea21fa1";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`}

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
