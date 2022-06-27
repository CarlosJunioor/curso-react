import React, { useState } from 'react';
import './App.css'

const App = () => {
  // let message = "Hello World!";
  const [message, setMessage] = useState("hello world");

  return (
    <>
    <div className="container">{message}</div>
    <button onClick={() => setMessage("changed the word now !")}>change word</button>
    </>
  );
}

export default App;