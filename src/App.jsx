import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Click Me');
  const [clicks, setClicks] = useState(0);
  // const [timer, setTimer] = useState(30);

  const audio = new Audio('cheers.mp3');
  if(clicks % 10 === 0) {
    audio.play();
  }

  const handleClick = () => {
    setText('Click Me Again');
    setClicks((clicks) => clicks + 1);
  }

  // const handleTimer = () => {
  //   //https://codesandbox.io/s/24xmm6n530
  // }

  return (
    <>
      <div>
        <div>
          Times Clicked: {clicks}
        </div>
        <div className="case">
          <button className="big-button" onClick={handleClick}>{text}</button>
        </div>
      </div>
    </>
  );
}

export default App;
