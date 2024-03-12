import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Data from "./Accordian/Data";
import RandomColor from "./GenrateRandomColor/RandomColor";
import StarRate from "./Star-Rating/StarRate";
import ImageSlide from "./ImageSlider/ImageSlide";
import LoadMore from "./ImageSlider/LoadMore";
import Tree from "./Tree-View/Tree";
import Menu from "./Tree-View/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <h1> it's aj</h1>
    <>
      {/* <Data /> */}
      {/* <RandomColor /> */}
      {/* <StarRate noOfStars={10}/> */}
      {/* <ImageSlide /> */}
      {/* <LoadMore/> */}
      <Tree menu={Menu}/>
    </>
  );
}

export default App;
