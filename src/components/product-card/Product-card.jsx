import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)

  const { name, price, imageUrl } = product

  const addProductToCard = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCard}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
