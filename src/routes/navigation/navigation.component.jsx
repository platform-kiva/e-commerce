import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'

// styles
import './navigation.styles.jsx'

// assets
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

// context 
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'

// components
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

export default function Navigation() {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    
    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    { currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
    </>
    )
}