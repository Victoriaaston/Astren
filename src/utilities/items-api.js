import { getToken } from './users-service';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
