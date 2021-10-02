import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();

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
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
