import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { Flex, Spacer, Box, ChakraProvider } from '@chakra-ui/react';
import data from "./data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bienvenidos from "./components/Bienvenidos";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart"



const App = () => {
  return (
    <>
<ChakraProvider>
          <BrowserRouter>
            <NavBar />
        <Routes>
         <Route exact path = "/" element= {<Bienvenidos/>} /> 
         <Route exact path = "/catalogo" element={<ItemListContainer/>}/>
         <Route exact path = "category/:category" element = {<ItemListContainer/>}/>
         <Route exact path = "/Item/:id" element = {<ItemListContainer/>}/>
         <Route exact path = "/cart" element = {<Cart />}/>

        </Routes> 
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
export default App;