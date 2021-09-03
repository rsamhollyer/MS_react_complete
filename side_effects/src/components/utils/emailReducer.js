export default function emailReducer(state, action) {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        value: action.payload.value,
        isValid: action.payload.value.includes('@'),
      };

    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: state.value.includes('@'),
      };

    default:
      return {
        value: '',
        isValid: false,
      };
  }
}
