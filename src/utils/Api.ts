import { Routes } from '@constants/Routes';
import { stringify } from 'qs';

export interface ApiOptions {
  token?: string;
  queryParams?: object;
  headers?: HeadersInit;
}

async function handleResponse(response: Response): Promise<any> {
  const res = await response.json();
  if (!response.status || response.status >= 500) {
    console.error(res);
    throw new Error('Sorry, something went wrong.');
  } else if (response.status === 401) {
    if (window && window.location) {
      window.location.assign(Routes.Signin);
    } else {
      throw res;
    }
  } else if (response.status === 400) {
    throw res;
  }
  return res;
}

function handleHeaders(options?: ApiOptions): HeadersInit {
  return {
    'Content-Type': 'application/json',
    ...(options?.token ? { Authorization: 'Bearer ' + options.token } : {}),
    ...(options?.headers || {}),
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: <T>(urlPath: string, options?: ApiOptions): Promise<T> => {
    const queryParams = options?.queryParams ? `?${stringify(options.queryParams)}` : '';

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${queryParams}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  post: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    const queryParams = options?.queryParams ? `?${stringify(options.queryParams)}` : '';

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${queryParams}`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  put: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    const queryParams = options?.queryParams ? `?${stringify(options.queryParams)}` : '';

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${queryParams}`, {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  patch: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    const queryParams = options?.queryParams ? `?${stringify(options.queryParams)}` : '';

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${queryParams}`, {
      method: 'PATCH',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  delete: <T>(urlPath: string, options?: ApiOptions): Promise<T> => {
    const queryParams = options?.queryParams ? `?${stringify(options.queryParams)}` : '';

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${queryParams}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
};
