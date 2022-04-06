import { useState } from "react";
import React from "react";
const ListItem = (props) => {
  const [inHover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);
  const labelStyle = {
    fontSize: inHover ? "25px" : "20px",
    textDecoration: checked ? "line-through" : "none",
  };

  return (
    <div>
      <label
        style={labelStyle}
        className="listLabel"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          type="checkbox"
          onClick={() => (checked ? setChecked(false) : setChecked(true))}
        ></input>
        {props.value.text}
      </label>
    </div>
  );
};

export default ListItem;
