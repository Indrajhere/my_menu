import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ data }) => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
