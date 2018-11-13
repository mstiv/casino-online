const isHeaderSaysJson = (value) => (value.includes('application/json'));

function isJsonResponse(response) {
  return response.headers.get('Content-Type') && isHeaderSaysJson(response.headers.get('Content-Type'));
}
/* a http util function, that makes the fetch call with config and resolves the promise */
const makeRequest = async (url = '', config = {}) => {
	const response = await fetch(url, config);
	if (response.status === 500) {
      return {
        status: response.status,
        data: null,
      };
    } else if (isJsonResponse(response)) {
      const data = await response.json();
      return {
        status: response.status,
        data,
      };
    }
}

export const post = async (url = '', data = {}) => {
	return await makeRequest(url, {
		method: 'POST',
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
	});
}

export const get = async (url = '', data = {}) => {
  return await makeRequest(url, {
    method: 'GET',
  });
}