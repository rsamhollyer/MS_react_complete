import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();
  const cartTotals = useSelector(state => state.cart.totalQuantity);

  const toggleCardHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      onClick={toggleCardHandler}
      type="button"
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotals}</span>
    </button>
  );
};

export default CartButton;
