import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white py-4">
        <h1 className="text-center">Welcome to the Axios Example</h1>
      </header>
      <PersonList />
    </div>
  );
}

export default App;
