import React from "react";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./Checkout.scss";
import  Checkoutitem  from "../../components/checkout-item/Checkoutitem";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Descripton</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) =>
      <Checkoutitem cartItem = {cartItem} key = {cartItem.id}/> )}

    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});
export default connect(mapStateToProps)(Checkout);
