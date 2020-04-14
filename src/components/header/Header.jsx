import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/original.svg";

import Cart from "../cart-icon/Cart";

import { HeaderContainer, OptionLink, OptionsContainer } from "./Header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <Cart />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
