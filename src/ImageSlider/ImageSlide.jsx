import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Style.css";
function ImageSlide() {
  const [image, setImage] = useState([]);
  const [cureenrSlide, setCureenrSlide] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.unsplash.com/search/photos?page=1&query=products&client_id=tZqDJedwfME67dNXAFrY_LgQVSG4gYpuZcgW1R664C4";
      const responce = await axios.get(url);
      const data = await responce.data.results.slice(0, 10);
      console.log(data);
      setImage(data);
    };
    getData();
  }, []);
  const hanldePrevious = () => {
    setCureenrSlide(cureenrSlide === 0 ? image.length - 1 : cureenrSlide - 1);
  };
  const handleNext = () => {
    setCureenrSlide(cureenrSlide === image.length - 1 ? 0 : cureenrSlide + 1);
  };
  return (
    <div className=" h-[100vh] w-full flex justify-center items-center">
      <div className="main w-[600px] relative h-[450px] flex gap-2 items-center ">
        <BsArrowLeftCircleFill
          onClick={hanldePrevious}
          className="left-arrow arrow"
        />
        {image ? (
          image.map((items, index) => (
            <img
              key={items.id}
              className={
                cureenrSlide === index
                  ? "current-image rounded-lg shadow-lg shadow-slate-800 w-full h-full   bg-contain"
                  : "current-image rounded-lg shadow-lg shadow-slate-800 w-full h-full hidden"
              }
              src={items.urls.raw}
              alt={items.alt_description}
            />
          ))
        ) : (
          <h1 className="font-bold text-4xl h-[100vh] w-full flex justify-center items-center">
            loading data...
          </h1>
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="right-arrow arrow"
        />

        <span className="circle-indicator">
          {image && image.length
            ? image.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      cureenrSlide === index
                        ? "current-indicator"
                        : "current-indicator bg-gray-600 text-white"
                    }
                    onClick={() => setCureenrSlide(index)}
                  >
                    {" "}
                    {index}
                  </button>
                );
              })
            : ""}
        </span>
      </div>
    </div>
  );
}

export default ImageSlide;
