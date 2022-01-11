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

export function ProductGrid({ products }: Products){
  return(
    <Container>
      <Content>
        {products.map((product) => (
          <ProductItem key={product.id} />
        ))}
      </Content>
    </Container>
  )
}