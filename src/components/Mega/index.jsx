import React, { useState } from "react";
import "./styles.css";

function Mega() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);

  const generateNumbers = function () {
    const array = [];

    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * (61 - 1) + 1);

      if (array.includes(randomNumber) === true) {
        do {
          randomNumber = Math.floor(Math.random() * (61 - 1) + 1);
          array[i] = randomNumber;
        } while (array.includes(randomNumber) === false);
      }

      array[i] = randomNumber;

      array.sort((a, b) => a - b);
    }

    setNumbers(array);
  };

  return (
    <div className="card">
      <h1 className="title">MEGA-SENA</h1>
      <div className="numbers-onscreen">{numbers.join(" - ")}</div>
      <button className="generate-button" onClick={generateNumbers}>
        Gerar números
      </button>
      <footer>&copy; github.com/ChristoferGuimaraes</footer>
    </div>
  );
}

export default Mega;
