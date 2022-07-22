import React from 'react';
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
        {/* <Typography variant="h5">{line_item_id.line_total.formatted_with_symbol}</Typography> */}
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_item_id.quantity - 1)}>-</Button>
          <Typography>&nbsp;{line_item_id.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_item_id.quantity + 1)}>+</Button>
        </div> */}
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(line_item_id)}>Quitar Producto</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;


{/* <CardMedia image={line_items[0].image.url} alt={line_items[0].name} className={classes.image} /> */}