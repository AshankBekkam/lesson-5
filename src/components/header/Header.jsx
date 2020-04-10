import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'


import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/original.svg";

import Cart from "../cart-icon/Cart";

import "./Header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Cart />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser:selectCurrentUser(state),
  hidden:selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
