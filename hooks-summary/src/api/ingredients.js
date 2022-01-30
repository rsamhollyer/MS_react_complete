export const URLString =
  'https://auth-312de-default-rtdb.firebaseio.com/ingredients.json';

export async function fetchPostIngreds(url, bodyString) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(bodyString),
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await res.json();
  return response;
}

export async function fetchGetIngred(url) {
  const res = await fetch(url);
  const response = await res.json();
  const ingredData = [];
  for (const key of Object.keys(response)) {
    ingredData.push({
      id: key,
      title: response[key].title,
      amount: response[key].amount,
    });
  }
  return ingredData;
}
