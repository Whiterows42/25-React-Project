import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs";
function ImageSlide() {
  const [image, setImage] = useState();
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.unsplash.com/search/photos?page=1&query=office&client_id=tZqDJedwfME67dNXAFrY_LgQVSG4gYpuZcgW1R664C4";
      const responce = await axios.get(url);
      const data = await responce.data.results.slice(0, 5);
      console.log(data);
      setImage(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="main w-[600px] relative h-[450px] flex gap-2  ">
        <BsArrowLeftCircleFill className="left-arrow" />
        {image ? (
          image.map((items) => (
            <img
              key={items.id}
              className="current-image rounded-lg shadow-lg shadow-slate-800 w-full h-full"
              src={items.urls.raw}
              alt=""
            />
          ))

        ) : (
          <h1 className="font-bold text-4xl h-[100vh] w-full flex justify-center items-center">
            loading data...
          </h1>
        )}
        <BsArrowRightCircleFill className="right-arrow"/>
      </div>
    </div>
  );
}

export default ImageSlide;
