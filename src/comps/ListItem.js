import { useState } from "react";
import React from "react";
const ListItem = (props) => {
  const [inHover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);
  const labelStyle = {
    padding: "20px",
    marginTop: "10px",
    width: "500px",
    listStyleType: "none",
    textTransform: "uppercase",
    fontSize: inHover ? "25px" : "20px",
    //textDecoration: checked ? "line-through" : "none",
    checked,
  };

  return (
    <div>
      <label
        style={labelStyle}
        className="listLabel"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => (checked ? setChecked(false) : setChecked(true))}
      >
        <input type="checkbox" />
        {props.value}
      </label>
    </div>
  );
};

export default ListItem;
