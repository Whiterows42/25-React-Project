import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css"
function Scroll({ getUrl }) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [percentoage, setpercentoage] = useState();
  const getdata = async () => {
    try {
      setLoading(true);
      const responce = await axios.get(getUrl);
      const data = await responce.data;

      if (data && data.products && data.products.length > 0) {
        setLoading(false);
        setdata(data.products);
      }
    } catch (e) {
      console.log(e);
      setErrormsg(e.message);
    }
  };
  useEffect(() => {
    getdata();
  }, [getUrl]);

  const handlePercentage = () => {
    const howmuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setpercentoage((howmuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handlePercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, percentoage);
  return (
    <div className="flex flex-wrap flex-col items-center gap-5">
      <div className="topContainer">

      <h1>scroll Indicator</h1>
      <div className="scrollTracker ">
        <div className="Current" style={{width:`${percentoage}%`, } }>

        </div>
      </div>
      </div>
      {data && data.length > 0
        ? data.map((val) => <p key={val.id}>{val.title}</p>)
        : ""}
    </div>
  );
}

export default Scroll;
