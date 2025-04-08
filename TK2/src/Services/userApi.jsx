const BASE_URL = 'https://67c83c090acf98d07085862a.mockapi.io/TH2';

export const getUsers = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const updateUser = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error('Failed to update user');

  return res.json();
};