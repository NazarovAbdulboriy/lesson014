import React from "react";
import { Link, useRoutes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const App = () => {
  // const foo = (p) => {
  //   let a = p
  //   // code....
  //   // code....
  //   // code....
  //   return {raducer, laylo, count, };
  // };

  // const b = foo({
  //   name: "counter",
  //   initialState: {
  //     value: 1,
  //   },
  //   reducers: {
  //     laylo: (state) => {
  //       state.value = state.value + 1;
  //     },
  //   },
  // });

  // console.log(b);

  return (
    <div className="bg-white h-[70px] ">
      <div className="container pt-[20px]">
        <Link className="ml-[1000px]" to="/">
          Home
        </Link>
        <Link className="ml-[30px]" to="/about">
          About
        </Link>
        {useRoutes([
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ])}
      </div>
    </div>
  );
};

export default React.memo(App);
