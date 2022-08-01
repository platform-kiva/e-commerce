// styles
import { CartItemContainer, ItemDetails } from "./cart-item.styles"

export default function CartItem({ cartItem }) {
    const { name, imageUrl, quantity, price } = cartItem

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}
