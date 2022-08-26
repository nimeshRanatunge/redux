import classes from "./CartItem.module.css";
import Button from '../UI/Button'

const CartItem = (props) => {
  return (
    <div className={classes.cartitem}>
      <header>
        <h1>{props.itemDetails.name}</h1>
        <div>
          <h1>{`$${props.itemDetails.total}`}</h1>
          <h3>{`($${props.itemDetails.price} /item)`}</h3>
        </div>
      </header>
      <section>
        <h2>x{props.itemDetails.quantity}</h2>
        <div className={classes.actions}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
