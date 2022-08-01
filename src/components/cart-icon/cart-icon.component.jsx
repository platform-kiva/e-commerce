import { useContext } from 'react'

// styles
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

// contexts
import { CartContext } from '../../context/cart.context'

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
