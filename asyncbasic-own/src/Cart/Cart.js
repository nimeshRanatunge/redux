import classes from "./Cart.module.css";
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <CartItem itemDetails={{name: 'Test Item', price: 6, quantity: 3, total: 18}}/>
    </div>
  );
};

export default Cart;
