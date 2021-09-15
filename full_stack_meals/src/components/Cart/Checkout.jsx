import React, { useRef, useState } from 'react';
import { isEmpty, isFiveChars } from '../../utils/formValidation';
import classes from './Checkout.module.css';

const Checkout = props => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredZip = zipInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const zipIsValid = !isEmpty(enteredZip) && isFiveChars(enteredZip);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      zip: zipIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && zipIsValid;
  };

  const formClasses = bool =>
    bool ? `${classes.control} ${classes.invalid}` : `${classes.control}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={formClasses(!formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please Enter a Valid Name</p>}
      </div>

      <div className={formClasses(!formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please Enter a Valid street</p>}
      </div>

      <div className={formClasses(!formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please Enter a Valid city</p>}
      </div>

      <div className={formClasses(!formInputsValidity.zip)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={zipInputRef} min="5" />
        {!formInputsValidity.zip && <p>Please Enter a Valid zip</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
