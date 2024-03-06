import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import { AddShoppingCartSharp, CallMissedSharp } from "@material-ui/icons";
import useStyles from "./style"


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant= "body2" color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Dodaj do koszyka" onClick={handleAddToCart}>
                    <AddShoppingCartSharp />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
