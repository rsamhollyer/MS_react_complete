export default function convertDate(dateObject) {
  return [
    dateObject.toLocaleString('en-US', { month: 'long' }),
    dateObject.toLocaleString('en-US', { day: '2-digit' }),
    dateObject.getFullYear(),
  ];
}
