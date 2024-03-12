import React, { useState } from "react";
import MenuList from "./menuList";
import { FaMinus, FaPlus } from "react-icons/fa";
function Menuitms({ item }) {
  const [displaycurrentChildren, setDisplaycurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentChilrent) => {
    setDisplaycurrentChildren({
      ...displaycurrentChildren,
      [getCurrentChilrent]: !displaycurrentChildren[getCurrentChilrent],
    });
  };
  console.log(displaycurrentChildren);
  return (
    <li className="pl-3 ">
      <div className="flex my-2 gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            className="cursor-pointer"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displaycurrentChildren[item.label] ? (
              <FaMinus size={25} />
            ) : (
              <FaPlus size={25} />
            )}
          </span>
        ) : null}
      </div>

      <div className="ml-6">
        {item.children &&
        item.children.length > 0 &&
        displaycurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </div>
    </li>
  );
}

export default Menuitms;
