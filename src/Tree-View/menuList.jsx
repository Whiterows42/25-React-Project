import React from "react";
import Menuitms from "./Menu-itms";

function MenuList({ list = [] }) {
  return (
    <ul className=" py-2  text-2xl">
      {list && list.length
        ? list.map((menuitem) => <Menuitms item={menuitem} />)
        : null}
    </ul>
  );
}

export default MenuList;
