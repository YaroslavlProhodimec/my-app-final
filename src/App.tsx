import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BaseContainer from "./components/BaseContainer";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<BaseContainer/>} />
        </Routes>
    </div>
  );
}

export default App;
