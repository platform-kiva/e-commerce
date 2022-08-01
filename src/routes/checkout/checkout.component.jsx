import { useContext } from 'react'

// contexts
import { CartContext } from '../../context/cart.context'

// styles
import './checkout.styles.scss'

// components
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

export default function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}
