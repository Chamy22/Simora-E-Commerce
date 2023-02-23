import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { Flex, Spacer, Box } from '@chakra-ui/react'
import data from "./data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Flex>
          <Box p='4' bg='#BCDDB3'>
            <NavBar />
          </Box>
          <Spacer />
          <Box p='4' bg='green.400'>
            <CartWidget />
          </Box>
        </Flex>
        <Routes>
         <Route exact path = "/" element= {<home/>} />
        <ItemListContainer greeting="Bienvenidos" />
        <ItemDetailContainer />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;