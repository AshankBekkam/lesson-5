import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cartitem/Cartitem'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import Button from '../button/Button'

import './CartDropdown.scss'

const CartDropdown = ({cartItems})=>(

    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key = {cartItem.id} item = {cartItem}/>

                ))
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>



)

const mapStateToProps = (state)=>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)

