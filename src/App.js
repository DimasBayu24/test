import Clock from 'react-digital-clock';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name] = useState('Mutia');
  const [greet, setGreet] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    greetingTime();
  }, []);

  const greetingTime = () => {
    const date = new Date();
    const hour = date.getHours();
    setTime(hour);

    if (hour >= 5 && hour < 12) {
      setGreet('Good Morning');
    }
    if (hour >= 12 && hour < 18) {
      setGreet('Good Afternoon');
    }
    if (hour >= 18 && hour < 21) {
      setGreet('Good Evening');
    }
    if (hour >= 21) {
      setGreet('Good Night');
    }
    if (hour < 5) {
      setGreet('Good Night');
    }
  };

  return (
    <div>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="text-light">{`${greet}, ${name}!`}</h1>
      {greet === 'Good Night' ? (
        <p className="text-light">Tidur yaaa dah malem</p>
      ) : (
          <p className="text-light">Tetap semangat ya!</p>
        )}

      <div class="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
        <h1 class="text-light">
          <Clock hour12={false} />
        </h1>

        {/* <a
          href="https://manuelpinto.in/"
          target="_blank"
          class="d-block btn btn-outline-light"
        >
          Visit my Website<i class="fas fa-external-link-square-alt ml-2"></i>
        </a> */}
      </div>

      {/* <h6 class="text-light small font-weight-bold">
        <i class="fas fa-code"></i> with <i class="fas fa-heart"></i> by Manuel
        Pinto
      </h6> */}
      {/* <a
        href="https://quran.kemenag.go.id/sura/94"
        target="_blank"
        class="d-block btn btn-outline-light"
      >
        “Karena sesungguhnya sesudah kesulitan itu ada kemudahan,
        <br /> sesungguhnya sesudah kesulitan itu ada kemudahan”
      </a> */}
    </div>
  );
}

export default App;
