import { useState } from "react";

function TimeLabel({ color, time }) {
  return <h1 style={{ color: color }}>{time.toString()}</h1>;
}

export default function App() {
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  const defaultColor = colors[0];

  const [color, setColor] = useState(defaultColor);
  const [timeMs, setTimeMs] = useState(new Date());

  const handleSelectColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <label htmlFor="select-color">Choose color: </label>
      <select id="select-color" onChange={handleSelectColor}>
        {colors.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <br />
      <TimeLabel color={color} time={timeMs} />
    </div>
  );
}
