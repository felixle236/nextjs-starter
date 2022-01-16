import { stringify } from 'qs';

export interface ApiOptions {
  token?: string;
  locale?: string;
  headers?: HeadersInit;
  queryParams?: object;
}

async function handleResponse(response: Response): Promise<any> {
  const res = await response.json();
  if (!response.status || response.status >= 500) {
    console.error(res);
    throw new Error('Sorry, something went wrong.');
  } else if (response.status >= 400) {
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

function handleQueryParams(options?: ApiOptions): string {
  if (options?.locale || options?.queryParams) {
    let params = {} as { locale?: string };
    if (options?.locale) {
      params.locale = options.locale;
    }
    if (options.queryParams) {
      params = {
        ...options.queryParams,
        ...params,
      };
    }
    return `?${stringify(params)}`;
  }
  return '';
}

export const Api = {
  get: <T>(urlPath: string, options?: ApiOptions): Promise<T> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${handleQueryParams(options)}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  post: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${handleQueryParams(options)}`, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  put: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${handleQueryParams(options)}`, {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  patch: <T>(urlPath: string, data?: object, options?: ApiOptions): Promise<T> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${handleQueryParams(options)}`, {
      method: 'PATCH',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
  delete: <T>(urlPath: string, options?: ApiOptions): Promise<T> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${urlPath}${handleQueryParams(options)}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: handleHeaders(options),
    }).then(handleResponse);
  },
};
