import fetch from 'isomorphic-fetch';

const baseUrl = 'http://www.scheding.com.au/api/blog';
const defaultError =
  'We are experiencing technical issues right now. Please try again soon.';

function checkStatus(response) {
  if (response.ok) {
    return response.json().then((data) => {
      return data;
    });
  }

  return response.json().then(({ errors = [defaultError] }) => {
    const [message] = errors;
    return Promise.reject(new Error(message));
  });
}

function fetchJson(url) {
  return fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

const fetchData = (endPoint = '') => {
  const blogEndPoint = `${baseUrl}${endPoint}`;
  return fetchJson(blogEndPoint);
};

export default fetchData;
