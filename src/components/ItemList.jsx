import Item from "./Item"
import { Container } from "@chakra-ui/react"

const ItemList = ({ropa}) => {
  return (
    <>
   <Container maxW="container.sm" className="main-catalogue">
        {bikes?.map((bike) => (
          <Item
            key={ropa.id}
            id={ropa.id}
            name={ropa.name}
            description={ropa.description}
            price={ropa.price}
            stock={ropa.stock}
            category={ropa.category}
          />
        ))}
      </Container>
    </>
  );
 
};

export default ItemList