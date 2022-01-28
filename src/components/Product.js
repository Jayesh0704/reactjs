import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div class="row">
      <div class="col-6">
        <h2>{props.product.name}</h2>
      </div>
    </div>
  );
}
