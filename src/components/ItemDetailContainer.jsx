import React from "react";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const {id} = useParams();

  const [Ropa, setRopa] = useState ([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setProductos(Data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const RopaFilter = Data.filter((Ropa) => Ropa.id === id);
  return <ItemDetail Ropa={data}/> 
  ;

};

export default ItemDetailContainer;