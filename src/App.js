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

// import React from "react";
// import { useState, useEffect } from "react";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(1);

//   const url = "https://course-api.com/react-tabs-project";
//   console.log(jobs);
//   const fetchJobs = async () => {
//     const reponse = await fetch(url);
//     const newJobs = await reponse.json();
//     setJobs(newJobs);
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // const { dates, duties, order, id, title } = exp[value];
//   if (loading) {
//     return (
//       <section className="section loading">
//         <h1>Loading...</h1>
//       </section>
//     );
//   }
//   const { company, dates, duties, title } = jobs[value];
//   return (
//     <div>
//       {jobs.map((data, index) => {
//         return (
//           <div>
//             <button onClick={() => setValue(index)}>{data.company}</button>
//           </div>
//         );
//       })}
//       <h1>{company}</h1>
//       <h2>{dates}</h2>
//       <h3>title</h3>
//       <>
//         {duties.map((data, index) => {
//           return (
//             <div key={index}>
//               <p>{data}</p>
//             </div>
//           );
//         })}
//       </>
//     </div>
//   );
// };
// export default App;
