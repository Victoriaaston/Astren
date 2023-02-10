import { getToken } from './users-service';

const BASE_URL = '/api/items';

async function sendRequest(url) {
    const token = getToken();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }
  
export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
