
import React from 'react';
import CartItem from "./CartItem/CartItem";
import PropTypes from 'prop-types';

const Cart = ({ cart, onEmptyCart, onUpdateCartQty, onRemoveFromCart }) => {

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        className="cart__inner"
      />
    ))
  );

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      { renderItems() }
      { renderTotal() }
      <div className="cart__footer">
        <button className="cart__btn-empty">Empty cart</button>
        <button className="cart__btn-checkout">Checkout</button> 
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart;















/* import React from "react";
import { Container, Typography, Button, Grid,CardMedia, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import Product from "../Products/Product/Product";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      No tienes productos en tu carrito,
      <Link className={classes.link} to="/">
        Comienza añadiendo algo
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "";

  const renderCart = () => (
    <>
      <Grid container justifyContent="center" spacing={4}>
        
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={lineItem.id}>
            <Card className={classes.root}>
            <CardMedia
              className={classes.image}
              //image={ product.assets[0].url }
              alt={lineItem.name}
            />
            console.log({lineItem.image.url})
            este es un item
            <CartItem
              item={lineItem.id}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Vaciar Carrito
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Pagar
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Su Carrito de Compras
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart; */
