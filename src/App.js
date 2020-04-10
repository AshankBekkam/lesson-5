import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/Header";
import Sign from "./pages/sign/Sign";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {selectCurrentUser} from './redux/user/user.selector'
import Checkout from "./pages/checkout/Checkout";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (<Redirect to="/" />) : (<Sign />)
            }
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />

          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
