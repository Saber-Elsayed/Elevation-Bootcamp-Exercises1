import React from "react";

function Company(props) {
  return (
    <div>
      {props.revenue} {props.name}
    </div>
  );
}

export default Company;
