import {contador, useState} from 'react';
import data from "../data.json";


const ItemCount = () => {
const [contador, setContador] =useState (0);
const sumar = () => {
    setContador (contador +1 );
};

  return (
    <div className='contador'>
    <p>{contador}</p>
    <button onClick={sumar}> + </button>
     <button onClick={()=> {setContador (contador - 1);
     }}> - </button>
     <button onClick={()=>{ setContador (0);
     }}>
      Reset
     </button>
     
    </div>
  )
}

export default ItemCount