import { ProductItem } from "../ProductItem";
import { Container, Content } from "./styles";

interface ProductsProps {
  id: number;
  name: string;
  originalPrice: number;
  bestPrice: number;
  imageUrl: string;
}
interface Products {
  products: ProductsProps[];
}

export function ProductGrid(props: Products){
  return(
    <Container>
      <Content>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </Content>
    </Container>
  )
}