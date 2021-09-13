// import "./App.css";
// import { useState } from "react";
// import data from "./data";
// import Menu from "./Menu";
// import Headline from "./Headline";
// import Filter from "./Filter";

// let cat = new Set(data.map((data) => data.category));
// let categ = ["All", ...cat];
// console.log(categ);
// function App() {
//   const [menu, setMenu] = useState(data);

//   const filterData = (category) => {
//     if (category === "All") {
//       setMenu(data);
//     } else {
//       let filterdData = data.filter((data) => data.category == category);
//       setMenu(filterdData);
//     }
//   };

//   return (
//     <div className="App">
//       <Headline />
//       <Filter Filter={filterData} categ={categ} />
//       <div className="App__menu">
//         {menu.map((data) => {
//           return <Menu {...data} key={data.id} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

///TABS APP******************************************************************

import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [exp, setExp] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const url = "https://course-api.com/react-tabs-project";
  console.log(exp);
  useEffect(() => {
    // axios.get(url).then((response) => setExp(response.data));
    fetch(url)
      .then((res) => res.json())
      .then((data) => setExp(data));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }

  const { company, dates, duties, order, id, title } = exp[value];
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
};
export default App;
