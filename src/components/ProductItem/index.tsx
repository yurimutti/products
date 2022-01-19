import { useState } from 'react'
import { Product } from './styles'
import { WishListIcon } from '../WishListIcon'
import { formatPrice } from '../../utils/format'

interface ProductProps {
  product: {
    id: number;
    name: string;
    originalPrice: number;
    bestPrice: number;
    imageUrl: string;
  }
}

export function ProductItem({ product }: ProductProps){
  const [add, setAdd] = useState(false)
  const [wishList, setWishList] = useState(false)

  function handleClickAdd(){
    setAdd(!add)
  }

  function handleClickWish(){
    setWishList(!wishList)
  }
  
  return(
    <Product>
      <WishListIcon onClick={handleClickWish} className={wishList ? 'added' : ''}/>
      <div className="image">
        <img src={product.imageUrl} alt="Produto"/>
      </div>
      <div className="name">
        <p>{product.name}</p>
      </div>
      <div className="price">
        <span className="original">{formatPrice(product.originalPrice)}</span>
        <strong className="best">{formatPrice(product.bestPrice)}</strong>
        <p className="installments">em até <strong>10x de {formatPrice((product.bestPrice * 10) / 100)}</strong> sem juros</p>
      </div>
      <button onClick={handleClickAdd} className={add ? 'added' : ''}>
        {add ? 'Adicionado' : 'Adicionar'}
      </button>
    </Product>
  )
}