import { ProductItem } from "../ProductItem";
import { Container, Content } from "./styles";

interface ProductsProps {
  id: number,
  name: string,
  originalPrice: number,
  bestPrice: number,
  imageUrl: string,
}


export function ProductGrid(props: ProductsProps){
  return(
    <Container>
      <Content>
        <ProductItem/>
      </Content>
    </Container>
  )
}