import "./App.css";
import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Headline from "./Headline";
import Filter from "./Filter";

let cat = new Set(data.map((data) => data.category));
let categ = ["All", ...cat];
console.log(categ);
function App() {
  const [menu, setMenu] = useState(data);

  const filterData = (category) => {
    if (category === "All") {
      setMenu(data);
    } else {
      let filterdData = data.filter((data) => data.category == category);
      setMenu(filterdData);
    }
  };

  return (
    <div className="App">
      <Headline />
      <Filter Filter={filterData} categ={categ} />
      <div className="App__menu">
        {menu.map((data) => {
          return <Menu {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
