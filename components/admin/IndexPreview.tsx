import React from "react";
import Index from "../../pages";

export const IndexPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <Index hero={data.hero} />;
  } else {
    return <div>Loading...</div>;
  }
};
