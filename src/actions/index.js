export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export const loginUser = (type,data) => (
	{
		type,
		data
	}
);