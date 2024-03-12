import React from "react";
import MenuList from "./menuList";

function Tree({ menu = [] }) {
  return (
    <div className="bg-blue-600 text-white  h-[100vh] w-1/3">
      <MenuList list={menu} />
    </div>
  );
}

export default Tree;
