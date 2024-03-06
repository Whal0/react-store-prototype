import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from "./style"
import logo from "../../img/navlogo.png"

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={ Link } to= "/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Error" height="30px" className={classes.image}/>
                        Test Sklep
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === "/" && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Pokaż zawartość koszyka" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartRounded/>
                            </Badge>
                        </IconButton>    
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
