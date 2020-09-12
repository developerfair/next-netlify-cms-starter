import React from "react";
import Index from "../../pages";

export const IndexPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <Index sections={data.sections} />;
  } else {
    return <div>Loading...</div>;
  }
};
