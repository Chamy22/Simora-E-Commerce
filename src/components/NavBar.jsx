import React from 'react'
import CartWidget from './CartWidget'
import { Menu } from '@chakra-ui/react'
import { Flex, Spacer, Avatar,Box,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Bienvenidos from './Bienvenidos'
import myImage from "../asset/LogoSimora.jpeg"


const NavBar = () => {
    return (
<div className= "Menu">       
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Catalogo
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to={`/categoria/${"Short"}`}>
    <a className="dropdown-item" href="#">Shorts</a>
    </Link>
    <Link to={`/categoria/${"Pantalon"}`}>
    <a className="dropdown-item" href="#">Pantalon</a>
    </Link>
    <Link to={`/categoria/${"Blusa"}`}>
    <a className="dropdown-item" href="#">Blusa</a>
    </Link>
    <Link to={`/categoria/${"Vestido"}`}>
    <a className="dropdown-item" href="#">Vestido</a>
    </Link>
  </div>

</div>
<CartWidget />
<Flex>
  <Avatar src= {myImage} alt= "Logo" />
  <Box ml='3'>
    <Text fontWeight='bold'>
      Simora
    </Text>
    <Text fontSize='sm'>Echa a tu medida</Text>
  </Box>
</Flex>

</div> 







)
}

export default NavBar

