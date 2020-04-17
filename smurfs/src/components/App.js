import React from "react";
import "./App.css";

import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm"

export default function App() {
  return (
    <div className="App">
        <header>
          <h1>SMURFS!</h1>
          <h2>Meet the Smurfs or add your own!</h2>
        </header>
      <SmurfsForm />
      <SmurfsList />
    </div>
  )
}