export const URLString =
  'https://auth-312de-default-rtdb.firebaseio.com/ingredients';

export async function fetchPostIngreds(url, bodyString) {
  const res = await fetch(`${url}.json`, {
    method: 'POST',
    body: JSON.stringify(bodyString),
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await res.json();
  return response;
}

export async function fetchGetIngred(url) {
  const res = await fetch(`${url}.json`);
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

export async function fetchDeleteIngred(url, deleteId) {
  const query = `/${deleteId}.json`;
  const res = await fetch(`${url}${query}`, {
    method: 'DELETE',
  });
  const response = await res.json();
  return response;
}
