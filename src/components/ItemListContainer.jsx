import {useState,useEffect} from 'react';
import Data from "../data.json";
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
import React from 'react';
import { Heading} from '@chakra-ui/react'; 
 

const ItemListContainer = () => {
  const{category}= useParams();
  const [Ropa, setRopa] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await fetch(Data)
        const Data = await response.json();
        setRopa(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
   }, []);
 
 
  const catFilter = Data.filter ((ropa)=> ropa.category
=== category);

  return (
  
   <div>
  
  {category ? <ItemList Ropa = {catFilter}/> : <ItemList Ropa={Ropa}/>}
  
  </div>

); 
};

export default ItemListContainer