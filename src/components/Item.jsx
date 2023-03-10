import React from 'react'
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'


const Item = ({id,name,stock,category}) => {
  return (
    <div>
        <div key= {id}>
    <div className='cards'>
       { /*< Card maxW='sm'>
    <CardBody>
      <Image
        src='https://th.bing.com/th/id/OIP.7B5b5Ab5qlPj6vnkfTkLBgHaLH?pid=ImgDet&rs=1'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Nombre del Short</Heading>
        <Text>
         Short 
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          $450
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Detalles
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Comprar
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card> */}
  <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
            Category: {category}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          Stock: {stock}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          <link to = {`/item/${id}`}>Details </link>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  </div>
  </div>
  </div>

  )
}

export default Item;