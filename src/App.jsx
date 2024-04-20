import { useState, useEffect, createContext } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Filters from "./Filters";
import menu from "./data";

export const MenuContext = createContext();

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [data, setData] = useState(menu);

  useEffect(() => {
    if(currentFilter!=='all'){
    const newData = menu.filter((item) => item.category === currentFilter);
    setData(newData);
    }
    else{
      setData(menu);
    }
  }, [currentFilter]);

  const handleFilterClick = (category) => {
    console.log("category: ", category);
    if (category !== "all") {
      setCurrentFilter(category);
      // const newData = menu.filter(item=>item.category===category);
      // setData(newData);
    } else {
      setCurrentFilter("all");
      // setData(menu);
    }
  };

  return (
    <MenuContext.Provider value={{currentFilter, handleFilterClick}}>
    <div className="flex flex-col items-center">
      <Title />
      <Filters />
      <Menu data={data} />
    </div>
    </MenuContext.Provider>
  );
};
export default App;
