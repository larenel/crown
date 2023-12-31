import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon
