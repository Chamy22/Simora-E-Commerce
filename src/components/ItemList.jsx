import React from "react";
import Item from "./Item";
import Ropa from "../Data.json";

const ItemList = () => {
  return (
    <div>
        {Ropa?.map((Ropa) => (
          <Item
          key={Ropa.id}
          id={Ropa.id}
          name={Ropa.Name}
          description={Ropa.description}
          stock={Ropa.stock}
          category={Ropa.category}
          precio={Ropa.precio}
          />
          ))}
    </div>
  );
  
};

 console.log (Ropa); 
export default ItemList