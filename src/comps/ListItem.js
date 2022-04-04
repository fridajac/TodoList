import { useState } from "react";
import React from "react";
const ListItem = (props) => {
  const [inHover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);
  const liStyle = {
    padding: "5px",
    marginTop: "10px",
    width: "500px",
    listStyleType: "none",
    textTransform: "uppercase",
    fontSize: inHover ? "25px" : "20px",
    textDecoration: checked ? "line-through" : "none",
  };
  return (
    <div
      className="listItem"
      style={liStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => (checked ? setChecked(false) : setChecked(true))}
    >
      <li>
        <input
          value={props.value}
          className="checkbox"
          type="checkbox"
          checked={checked}
        />
        {props.value}
      </li>
    </div>
  );
};

export default ListItem;
