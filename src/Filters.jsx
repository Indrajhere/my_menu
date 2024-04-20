import React, { useContext } from "react";
import { MenuContext } from "./App";

const Filter = ({ name }) => {
  const  {currentFilter, handleFilterClick}   = useContext(MenuContext);
  console.log(currentFilter);
  return (
    <button
      onClick={() => handleFilterClick(name)}
      className={`py-1 px-2 rounded-md text-[13px] bg-[#F59E0B] text-white mx-2 tracking-widest shadow-md capitalize ${currentFilter === name ? 'text-orange-700 font-medium' : ''} hover:text-orange-700`}
    >
      {name}
    </button>
  );
};

const Filters = () => {
  return (
    <div className="mt-10">
      <Filter name="all" />
      <Filter name="breakfast" />
      <Filter name="lunch" />
      <Filter name="shakes" />
    </div>
  );
};

export default Filters;
