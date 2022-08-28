import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { cartActions } from '../store/cartSlice';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const cartShowHandler = ()=>{
    dispatch(cartActions.cartshow());
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onclk={cartShowHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
