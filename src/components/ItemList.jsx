/* import React from "react";
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
export default ItemList */


import Item from "./Item";
import { Container } from "@chakra-ui/react";


const ItemList = ({ Ropa }) => {
  return (
    <>
    
      <Container className="main-catalogue">
        {Ropa?.map((ropas) => (
          <Item
            key={Ropa.id}
            id={Ropa.id}
            Name={Ropa.Name}
            description={Ropa.description}
            Precio={Ropa.Precio}
            stock={Ropa.stock}
            
      
          />
        ))}
      </Container>  

      
    </>
  );
};


export default ItemList


