import React from "react";

const Gap = ({ mb, mt, pb, pt }) => {
  return (
    <div
      style={{
        marginBottom: mb,
        marginTop: mt,
        paddingBottom: pb,
        paddingTop: pt,
      }}
    />
  );
};

export default Gap;
