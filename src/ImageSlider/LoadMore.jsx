import axios from "axios";
import React, { useEffect, useState } from "react";

function LoadMore() {
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    // let responce = axios.get( "https://api.unsplash.com/search/photos?page=1&query=products&client_id=tZqDJedwfME67dNXAFrY_LgQVSG4gYpuZcgW1R664C4")
    let responce = axios.get(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    let data = (await responce).data.products;
    setProduct((prevdata) => [...prevdata, ...data]);
    console.log(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div>
      <div className="flex flex-wrap justify-around  gap-5">
        {product && product.length ? (
          product.map((itmes) => (
            <div className=" rounded-lg border  p-2 border-black w-[20%] ml-1 flex flex-col items-center gap-3 justify-start">
              <img
                title={itmes.title}
                style={{ cursor: `url(${itmes.thumbnail} )`|| `pointer` , }}
                className={`  rounded-lg w-[300px] h-[200px] `}
                key={itmes.id}
                src={itmes.thumbnail}
                alt={itmes.title}
              />
              <p className="font-bold text-xl">{itmes.title}</p>
            </div>
          ))
        ) : (
          <div>loding Data</div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setCount(count + 1)}
          disabled={product.length === 100}
          className={`p-2 bg-blue-700 my-5 w-fit disabled:bg-blue-400 disabled:cursor-not-allowed font-bold cursor-pointer text-white rounded-lg`}
        >
          {product.length === 100 ? "you have reached" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
