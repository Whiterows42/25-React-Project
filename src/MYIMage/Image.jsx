import React, { memo } from "react";

function Image({ product, page, setPage }) {
  console.log("image called");
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center h-[100%] w-[100%] ">
        {product &&
          product.map((val) => (
            <div key={val.id} className=" flex justify-between ">
              <img
                style={{ cursor: `url( ${val.urls.raw}),auto` }}
                title={val.description}
                className={`h-[250px] w-[250px]  `}
                src={val.urls?.raw}
                alt=""
              />
            </div>
          ))}
      </div>
      <button onClick={() => setPage(page + 1)}>
        {" "}
        add more {product.length}
      </button>
    </div>
  );
}

export default memo(Image);
