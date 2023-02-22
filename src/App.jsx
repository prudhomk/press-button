import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Click Me');
  const [clicks, setClicks] = useState(0);
  // const [timer, setTimer] = useState(30);

  // const audio = new Audio('cheers.mp3');
  // if(clicks % 10 === 0) {
  //   audio.play();
  // }

  const clickPhrase = [
    'Click Me Again',
    'Again!',
    'Keep Going!',
    '',
    '',
    '',
    '',
    '',
    'Really Push!',
    '',
    '',
    '',
    '',
    '',
    'OK',
    'That\'s Enough',
    'Really',
    'Stop it',
    'Stop',
    'PLEASE',
    'PLEASE STOP',
    'NO',
    'COME ON',
    'KNOCK IT OFF',
    'I\'M WARNING YOU',
    '3',
    '2',
    '1',
    '1 AND A 1/2',
    'Gotcha haha',
    'No seriously',
    'Stop pushing it',
    'Can you read?',
    '*sigh*',
    '...',
    'Fine',
    'Have it your way',
    'DETONATE',
    'DELETE SYS32',
    'DROP TABLES',
    'EXPLODE PC',
    'EXPLODE WORLD',
    'WIN $100',
    'Click Me'
  ]

  const handleClick = () => {
    setText(clickPhrase[clicks]);
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
