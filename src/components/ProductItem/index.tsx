import { useState } from 'react'
import { Product } from './styles'
import { WishListIcon } from '../WishListIcon'

export function ProductItem(){
  const [add, setAdd] = useState(false)
  const [wishList, setWishList] = useState(false)

  function handleAddClick(){
    setAdd(!add)
  }

  function handleWishClick(){
    setWishList(!wishList)
  }
  
  return(
    <Product>
      <WishListIcon onClick={handleWishClick} className={wishList ? 'added' : ''}/>
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/product.png'} alt="Produto"/>
      </div>
      <div className="name">
        <p>Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50</p>
      </div>
      <div className="price">
        <span className="original">R$ 2.813,99</span>
        <strong className="best">R$ 2.599,00</strong>
        <p className="installments">em até <strong>10x de R$ 259,90</strong> sem juros</p>
      </div>
      <button onClick={handleAddClick} className={add ? 'added' : ''}>{add ? 'Adicionado' : 'Adicionar'}</button>
    </Product>
  )
}