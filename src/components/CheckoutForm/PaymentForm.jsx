import React from 'react'
import { Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { Link } from "react-router-dom"

const PaymentForm = ({cart, backStep}) => {
    
    return (
        <>
        <Typography variant="h6" gutterBottom>Podsumowanie:</Typography>
        <List disablePadding>
          {cart.line_items.map((product) => (
            <ListItem style={{ padding: '10px 0' }} key={product.name}>
              <ListItemText primary={product.name} secondary={`Ilość: ${product.quantity}`} />
              <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>
            </ListItem>
          ))}
          <ListItem style={{ padding: '10px 0' }}>
            <ListItemText primary="Łącznie" />
            <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
              {cart.subtotal.formatted_with_code}
            </Typography>
          </ListItem>
        </List>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button component={Link} variant="outlined" to="/checkout">Wróc do Kasy</Button>
        <Button component={Link} to = "/" variant="contained" >Zapłać</Button>
        </div>

      </>
    )
   
}

export default PaymentForm
