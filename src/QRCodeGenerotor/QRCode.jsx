import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
function QRCodeGen() {
  const [input, setinput] = useState("");
  const [Qrcode, setQrcode] = useState("");

  const handlekey = (e) => {
    if (e.key === "Enter") {
      setQrcode(input.trim());
      setinput(" ");
    }
  };
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className="flex flex-col  p-3">
        <h1 className="font-bold text-4xl text-pink-700">Qr Code Generator</h1>
        <input
          className="border border-black hover::border-blue-800 p-3 my-3 placeholder:text-red-400 rounded-lg"
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Enter The Text"
          onKeyDown={(e) => handlekey(e)}
        />
        <button
          className="border border-black bg-violet-800 disabled:bg-violet-500 p-2 rounded-lg text-white font-bold tracking-tighter"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => setQrcode(input)}
        >
          Click
        </button>
      </div>
      <div>
        <QRCode value={Qrcode} size={400} />
      </div>
    </div>
  );
}

export default QRCodeGen;
