import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "598f79df";
  const APP_KEY = "6b084ce5a194500f083460330ea21fa1";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

    useEffect(() =>{
      console.log('Effect has been run');
    });


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
        </button>
      </form>
      <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
