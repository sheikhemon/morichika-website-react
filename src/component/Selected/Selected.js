import React from 'react';
import './Selected.css';

const Selected = (props) => {
  const { selected } = props;
  let total = 0;
  for (const actor of selected) {
    total = total + actor.cost;
  }
  let name = '';
  for (const actor of selected) {
    name = name + actor.name
  }
  return (
    <div className="selected">
      <h1 style={{ color: "#a786df" }}>Cast Selected</h1>
      <h2>Selected : <span className="selected-cart"> {props.selected.length} </span> </h2>
      <h2>Total Cost: <span className="selected-cart"> {total}$ </span> </h2>
      <h2>{name}</h2>


    </div>
  );
};

export default Selected;