import React from "react";
import { useState, useEffect } from "react";
import Data from "../Data.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const {id} = useParams();

  const [Ropa, setRopa] = useState ([]);

  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const Data = await response.json();
        setRopa(Data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const RopaFilter = Data.filter((Ropa) => Ropa.id === id);
  return <ItemDetail Ropa={Data}/> 


};

export default ItemDetailContainer;



