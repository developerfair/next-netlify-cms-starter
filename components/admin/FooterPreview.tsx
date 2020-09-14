import React from "react";
import { Footer } from "../Footer";

export const FooterPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    debugger;
    return <Footer data={data} />;
  } else {
    return <div>Loading...</div>;
  }
};
