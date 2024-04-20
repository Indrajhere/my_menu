import React from "react";

const MenuItem = ({ item }) => {
  const { id, title, category, price, img, desc } = item;
  return (
    <div className="w-[367px] bg-white ">
      <img className="h-[240px] w-full rounded-t-md " src={img} />
      <div className="p-4">
        <div className="flex justify-between my-2">
          <h3 className="text-[19px] font-medium capitalize tracking-wide">{title}</h3>
          <p className="bg-[#F59E0B] text-white rounded-md px-2 tracking-wider pt-[2px]"> {'$'}{price}</p>
        </div>
        <div>
          <p className="text-[#64748B] leading-8">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
