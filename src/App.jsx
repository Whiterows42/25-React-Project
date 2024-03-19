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
import QRCodeGen from "./QRCodeGenerotor/QRCode";
import LIghtDarkMod from "./Theme/LIghtDarkMod";
import IMages from "./MYIMage";
import Scroll from "./ScrollIndicator/Scroll";

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
      {/* <Tree menu={Menu}/> */}
      {/* <QRCodeGen/> */}
      {/* <LIghtDarkMod/> */}
      {/* <IMages/> */}
      <Scroll getUrl={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
