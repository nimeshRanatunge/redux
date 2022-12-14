import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onclk}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
