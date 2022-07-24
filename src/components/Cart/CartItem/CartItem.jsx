import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  }

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  }

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={item.image.url} alt={item.name} />
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <p>{item.quantity}</p>
        </div>
        <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
      </div>
      <button
        type="button"
        className="cart-item__remove"
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;




/* import React from "react";
//import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from "./styles";
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY);

const CartItem = ({ item, line_items, lineItemId, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  }
  
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={item.image.url} alt={item.name} />
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <h4 className="cart-item__details-name">{item.quantity}</h4>
        <h4 className="cart-item__details-name">{item.id}</h4>
        <h4 className="cart-item__details-name">{lineItemId}</h4>
        <div className="cart-item__details-qty">
          <button
            type="button"
            onClick={() => commerce.cart.update(item.id, item.quantity - 1)}
            >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
            +
          </button>
        </div>
        <div className="cart-item__details-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <button type="button" className="cart-item__remove" onClick={() => commerce.cart.remove(item.id)}>
        Remove
      </button>
    </div>
  );
  console.log(item.quantity)
};

export default CartItem; */

/* import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ line_item_id, line_items, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{line_item_id}</Typography>
        <Typography variant="h5">{line_item_id.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_item_id.quantity - 1)}>-</Button>
          <Typography>&nbsp;{line_item_id.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_item_id.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(line_item_id)}>Quitar Producto</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem; */
