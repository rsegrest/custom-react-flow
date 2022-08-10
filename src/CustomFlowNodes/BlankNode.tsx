import React, { memo } from "react";
import * as R from "ramda";
import { Handle } from "react-flow-renderer";
import Node, { contentStyle as style } from "./Node";

// const isValidConnection = (connection) => {
//   return R.last(R.split("__", connection.target)) === "data";
// };

const BlankNode = ({ data, selected }) => {
  return (
    <Node
      label={data.name}
      selected={selected}
      color={"LemonChiffon"}
      content={<div style={style.io}>{"&"}</div>}
    />
  );
};

export default memo(BlankNode);
