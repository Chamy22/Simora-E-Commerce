import {useState,useEffect} from 'react';
import data from "../data.json";
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import itemDetail from "./Item"

const ItemListContainer = () => {
  const{category}= useParams();
  const catFilter = data.filter ((ropa)=> ropa.category
=== category);

  return (
    <div>
    <Center bg="#D6EAF8" h="100px" color="black">
      <Heading as="h2" size="2xl">
     Ropa
      </Heading>
    </Center>
    {category ? <ItemList ropa={catFilter} /> : <ItemList ropa={Data} />}
  </div>
); 
};

export default ItemListContainer