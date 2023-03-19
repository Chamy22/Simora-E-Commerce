import React from "react";
import Item from "./Item";
import ropa from "../data.json";

const ItemList = () => {
  return (
    <div>
        {ropa.map((ropa) => (
          <Item
          key={ropa.id}
          id={ropa.id}
          name={ropa.Name}
          description={ropa.description}
          stock={ropa.stock}
          category={ropa.category}
          precio={ropa.precio}
          />
          ))}
    </div>
  );
  
};

console.log (ropa);
export default ItemList