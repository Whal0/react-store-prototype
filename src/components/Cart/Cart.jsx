import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from "./CartItem/CartItem"
import useStyles from "./style"

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Nie masz żadnych przedmiotów w koszyku,
            <Link className={classes.link} to="/">dodaj kilka tutaj</Link>!
        </Typography>
      );
      
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item= {item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
            <Typography variant="h4">Suma: {cart.subtotal.formatted_with_code}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Pusty Koszyk</Button>
                <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary" component={Link} to="/checkout">Zapłać</Button>
            </div>
            </div>
        </>
    );

    if(!cart.line_items) return "Wczytywanie...";
    
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Twój Koszyk</Typography>
            { !cart.line_items.length ? EmptyCart() : FilledCart() }
        </Container>
    )
}

export default Cart
