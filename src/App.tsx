import * as React from 'react';
import { useState, useEffect } from "typescript";
import "./App.css";

const App: React.SFC<IAppProps> = (props) => {
  const [name, setName] = useState<string>("");

  const getName = async () => {
    let r = await fetch("/api/hello");
    let name = await r.json();
    setName(name);
  };


  return (
    <main className="container">
      <h1 className="covalence-blue">Hello {name} !</h1>
    </main>
  );
};

export default App;

interface IAppProps {}
