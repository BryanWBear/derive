import React, { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

function App() {
  const [text, setText] = useState("");
  // const changeText = e => {
  //   setText;
  // };

  return (
    <div className="App">
      <FormControl as="textarea" aria-label="With textarea" rows={10} onChange={e => setText(e.target.value)}/>
      <text>{text}</text>

    </div>
  );
}

export default App;
