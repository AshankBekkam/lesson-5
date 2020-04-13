import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const paise = price * 100;
  const key = "pk_test_xGbxYyfcUmKohwfeidB1GL3q00vw5h48Cw";

  const onToken = (token) => {
    console.log(token);
    alert("Congrats on your purchase!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SneaksNMore"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={paise}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={key}
      currency="inr"
    />
  );
};

export default StripeButton