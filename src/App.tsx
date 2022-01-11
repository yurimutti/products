import { useEffect, useState } from "react";
import { ProductGrid } from "./components/ProductGrid";
import { api } from "./services/api";
import { GlobalStyle } from "./style/global";

interface Products {
  id: number,
  name: string,
  originalPrice: number,
  bestPrice: number,
  imageUrl: string,
}

export function App() {
  const [products, setProducts] = useState<Products[]>([])
  
  useEffect(() => {

    const fetchItems = async () => {
      const response = await api.get('products')

      setProducts(response.data)
    }
    
    fetchItems();
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <ProductGrid products={products} />
    </div>
  );
}
