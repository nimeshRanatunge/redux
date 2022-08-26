import classes from './CartButton.module.css'
import Button from '../UI/Button';

const CartButton = (props)=>{
    return (
        <Button clzN={classes.button} >
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </Button>
    );
}

export default CartButton;