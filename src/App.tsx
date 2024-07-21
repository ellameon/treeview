import React from 'react';
import './App.css';
import { TreeView } from "./view/pages";
import { useInitializeStore } from "./service";

function App() {

  useInitializeStore()

  return (
    <div className="App">
      <TreeView/>
    </div>
  );
}

export default App;
