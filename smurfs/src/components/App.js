import React from "react";
import "./App.css";

import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm"

export default function App() {
  return (
    <div className="App">
        <header>
          <h1>SMURFS!</h1>
          <div>Welcome to the Smurfs!</div>
        </header>
      <SmurfsForm />
      <SmurfsList />
    </div>
  )
}