export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const authenticatePlayer = (response) => (
	{
		type: LOGIN_SUCCESS,
		data: response.data,
		status: response.status
	}
);