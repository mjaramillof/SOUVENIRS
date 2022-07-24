import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ line_item_id, line_items, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (line_item_id, newQuantity) => onUpdateCartQty(line_item_id, newQuantity);

  const handleRemoveFromCart = (line_item_id) => onRemoveFromCart(line_item_id);

  return (
    <Card className="cart-item">
      {/* <CardMedia image={image.url} alt={image.filename} className={classes.image} /> */}
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{line_item_id}</Typography>
        {/* <Typography variant="h5">{line_item_id.line_total.formatted_with_symbol}</Typography> */}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_items.line_item_id.quantity - 1)}>-</Button>
          {/* <Typography>&nbsp;{line_items.line_item_id.quantity}&nbsp;</Typography> */}
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(line_item_id, line_items.line_item_id.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(line_item_id)}>Quitar Producto</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

