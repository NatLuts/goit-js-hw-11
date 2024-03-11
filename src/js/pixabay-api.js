const API_KEY = '42817939-fb8caefadf90676475c3fc719';
const BASE_URL = 'https://pixabay.com/api/';

export function getPhotos(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
