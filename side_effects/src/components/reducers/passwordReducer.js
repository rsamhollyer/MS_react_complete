export default function passwordReducer(state, action) {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        value: action.payload.value,
        isValid: action.payload.value.trim().length >= 6,
      };

    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: state.value.trim().length >= 6,
      };

    default:
      return {
        value: '',
        isValid: false,
      };
  }
}
