import React from 'react';
import Header from "./components/Header.js";
import Counter from "./components/Counter.js";
import AddTask from "./components/AddTask.js";
import IncompleteList from "./components/IncompleteList.js";
import CompleteList from "./components/CompleteList.js";
import {GlobalContextProvider} from './context/GlobalState.js'
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
    <div className = "container">
      <div className = "app-wrapper">
      <Header/>
      <Counter/>
      <AddTask/>
      <IncompleteList/>
      <CompleteList/>
      </div>
    </div>
    </GlobalContextProvider>
  )
}

export default App

