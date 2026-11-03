import { useState } from "react";

const Changecolor = () => {
  const [color, setColor] = useState("#ffffff");

  const changeColor = () => {
    const chars = "0123456789abcdef";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += chars[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  return (
    <div
      className="change-color"
      style={{
        border: "1px solid purple",
        marginTop: "4rem",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        className="circle"
        style={{
          backgroundColor: color,
          borderRadius: "50%",
          border: "1px solid",
          width: "100px",
          height: "100px",
        }}
      ></div>

      <h2>{color}</h2>

      <button
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "3px solid pink",
          cursor: "pointer",
          fontSize: "400",
        }}
        onClick={changeColor}
      >
        changeColor
      </button>
    </div>
  );
};

export default Changecolor;
