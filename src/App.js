import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import routes from "./config/routes";
import "./App.css";



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-container">
        { routes }
      </div>
    </div>
  );
}

export default App;
