// eslint-disable-next-line no-undef

import { API_KEY } from './env';

export const createUserUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const loginUserUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const updateUserPasswordUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
