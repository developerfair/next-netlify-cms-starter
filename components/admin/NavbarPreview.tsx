import React from "react";
import { Navbar } from "../Navbar";

export const NavbarPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    debugger;
    return <Navbar data={data} />;
  } else {
    return <div>Loading...</div>;
  }
};
