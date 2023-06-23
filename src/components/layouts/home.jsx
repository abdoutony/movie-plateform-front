import React from "react";
import NavBar from "../nav-bar";

export default function HomeLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      {/* dynamic content */}

      {/* footer */}
    </>
  );
}
