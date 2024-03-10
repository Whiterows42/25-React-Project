import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const UtilityRandom = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[UtilityRandom(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };
  const handleRandomRgbColor = () => {
    const r = UtilityRandom(256);
    const g = UtilityRandom(256);
    const b = UtilityRandom(256);
    setColor(`rgb(${r} , ${g}, ${b})`);
  };
  useEffect(() => {
    
  if (typeOfColor === "rgb" ) handleRandomRgbColor()
  else handleRandomHexColor()
   
  }, [typeOfColor])
  
  return (
    <div
      className={`h-[100vh] w-full bg-${color} `}
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-white text-black font-bold p-3 rounded-lg m-2"
        >
          Create hex Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="bg-white text-black font-bold p-3 rounded-lg m-2"
        >
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
          className="bg-white text-black font-bold p-3 rounded-lg m-2"
        >
          Genrote Random Color
        </button>
      </div>
      <div className="flex justify-center h-full w-full  flex-col items-center font-bold text-3xl">
        {" "}
        <h3>{typeOfColor === "rgb" ? "Rgb Color" : " Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
