import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Image from "./Image";
import Another from "./Another";

function IMages() {
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);

  const getData = useCallback(async () => {
    const url = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=products&client_id=tZqDJedwfME67dNXAFrY_LgQVSG4gYpuZcgW1R664C4`
    );
    const data = await url.data.results;
    console.log(data);
    console.log("calle");
    const filteredData = data.filter(
      (item) => !product.some((product) => product.id === item.id)
    );
    setProduct((prevData) => [...prevData, ...filteredData]);
  }, [product]);
  useEffect(() => {
    getData();
  }, [page]);
  console.log(" this is page" + page);
  return (
    <>
      <Image product={product} page={page} setPage={setPage} />
      <Another />
    </>
  );
}

export default IMages;
