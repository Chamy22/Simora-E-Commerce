import React from 'react'
import CartWidget from './CartWidget'
import { Menu } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (

<div class= "Menu">       
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Simora
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Shorts</a>
    <a class="dropdown-item" href="#">Pantalon</a>
    <a class="dropdown-item" href="#">Blusa</a>
    <a class="dropdown-item" href="#">Vestido</a>
  </div>

</div>
</div> 
    )
}

export default NavBar

