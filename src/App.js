import React from "react";
import "./index";
import { Routes, Route, NavLink } from "react-router-dom";
import Show from "./Show";
import Menu from "./Menu";

const App = () => {
  let unique = [...new Set(Menu.map((val) => val.category)), "all"];
  console.log(unique);
  return (
    <>
      <h1 className="my-3 text-center" style = {{fontFamily: 'Alkatra, cursive'}}>Eating makes everyone happy.</h1>
      <hr></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem 2rem",
          flexWrap: "wrap",
        }}
      >
        {unique.map((val, index) => {
          console.log({ val });
          return (
            <button type="button" className="btn btn-warning" key={index}>
              <NavLink to={`/${val}`} aria-current="page" >
                {val}
              </NavLink>
            </button>
          );
        })}
      </div>
      <Routes>
        <Route
          exact
          path="/breakfast"
          element={<Show event={"breakfast"} />}
        ></Route>
        <Route path="/lunch" element={<Show event={"lunch"} />}></Route>
        <Route path="/snacks" element={<Show event={"snacks"} />}></Route>
        <Route path="/dinner" element={<Show event={"dinner"} />}></Route>
        <Route path="/*" element={<Show event={"all"} />}></Route>
      </Routes>
    </>
  );
};
export default App;
