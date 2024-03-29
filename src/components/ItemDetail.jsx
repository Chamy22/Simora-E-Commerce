import React from 'react'
import productpic from '../assets/example.jpg'

import { useParams } from 'react-router-dom';
import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";


const ItemDetail = ({ropas}) => {
    const { id } = useParams();
    console.log(id);
    const RopaFilter = ropas.filter((Ropa) => Ropa.id == id);

  return (
    <>
      {productFilter.map((product) => (
        <div key={Ropa.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image 
                  src={productpic}
                  // src={`image_id${id}.jpg`}
                  alt={Ropa.name}
                  borderRadius="lg"                 
                  boxSize='200px'
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.Name}</Heading>
                  <Text color="black" fontSize="l">
                    Descripción: {Ropa.description}
                  </Text>
                  <Text color="black" fontSize="l">
                    Categoría: {Ropa.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {Ropa.stock}
                  </Text>
                  <Text color="teal" fontSize="xl">
                    Precio: $ {Ropa.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <Center className="btn-center">
                  <Button variant="solid" colorScheme="teal">
                    Comprar
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>      
        ))}
    </>
  )
}

export default ItemDetail