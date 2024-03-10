import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRate({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  useEffect(() => {
    let local = localStorage.getItem("token");
    if (local) {
      const storeloacl = JSON.parse(local);
      setRating(storeloacl);
    }
  }, []);
  function handleClick(getCurrentIndex) {
    // Use the callback form of setRating to ensure working with the updated state
    setRating((prevRating) => {
      // console.log(getCurrentIndex);
      localStorage.setItem("token", getCurrentIndex);
      return getCurrentIndex;
    });
  }
  function handleMouseEnter(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(rating);
  }

  function handleLoclStore(getCurrentIndex) {
    const cr = localStorage.removeItem("token");
    console.log(cr);
    console.log("sfsafa");
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= hover || rating ? `text-yellow-500` : ``}
            onClick={() => handleClick(index)}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            onDoubleClick={() => handleLoclStore(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRate;
