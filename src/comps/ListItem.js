import { useState } from "react";
import React from "react";
import Icon from "./trash-bin.png";

const ListItem = (props, { deleteItem }) => {
  const [inHover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);
  const labelStyle = {
    fontSize: inHover ? "25px" : "20px",
    textDecoration: checked ? "line-through" : "none",
    color: checked ? "grey" : "black",
    cursor: "pointer",
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
        <button
          className="btn"
          style={{
            backgroundColor: "white",
            color: "red",
            marginLeft: "30px",
            border: "none",
          }}
        >
          <img
            src={Icon}
            alt="Delete"
            style={{ width: { inHover } ? "30px" : "10px" }}
            onClick={(e) => deleteItem(e.target.value)}
          ></img>
        </button>
      </label>
    </div>
  );
};

export default ListItem;
