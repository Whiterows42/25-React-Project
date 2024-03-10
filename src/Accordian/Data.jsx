import React, { useEffect, useState } from "react";
import axios from "axios";
function Data() {
  const [responce, setResponse] = useState([]);
  const [body, setbody] = useState();
  const [isToggled, setToggle] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const slicedData = result.data.slice(0, 10);
        setResponse(slicedData);
        console.log(slicedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const givebody = (e) => {
    setbody(e);
    setToggle(!isToggled);
    console.log(e);
  };
  return (
    <div>
      {responce.map((itme) => {
        return (
          <div
            className="flex rounded-lg my-2  p-2 px-5 bg-yellow-500 flex-col border border-2 border-black"
            key={itme.id}
          >
            <div
              className="flex rounded-lg  gap-4 items-center justify-between "
              onClick={(e) => givebody(itme.id)}
            >
              <h6> {itme.name}</h6>
              <span className="font-bold text-xl">
                {isToggled && body === itme.id ? "-" : "+"}{" "}
              </span>
            </div>
            {isToggled && body === itme.id ? (
              <div className="w-fit flex  justify-start text-white font-bold">
                {" "}
                {itme.body}{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Data;
