import jwtDecode from 'jwt-decode';
import axios from 'axios';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.RESTURL_WHALEFRAC;

type CodeMessage = {
  [key: number]: string;
};

const codeMessage: CodeMessage = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'Gone',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

// intercepting to capture errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 404) {
      alert('/not-found');
    } else if (error && error.response && error.response.status === 403) {
      window.location.href = '/#/access-denied';
    } else {
      const status: number = error.response?.status || 500;

      alert(codeMessage[status]);

      return Promise.reject(error);
    }
  }
);

const AUTH_SESSION_KEY = 'RYG_user';

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: string | null) => {
  /**
   * if (token) axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
   * else delete axios.defaults.headers.common['Authorization'];
   */
  delete axios.defaults.headers.common['Authorization'];
};

const getUserFromSession = () => {
  if (typeof window === 'undefined') return undefined;

  const user = sessionStorage.getItem(AUTH_SESSION_KEY);

  if (user) {
    return typeof user == 'object' ? user : JSON.parse(user);
  }
  return undefined;
};

class APICore {
  /**
   * Fetches data from given url
   */
  get = (url: string, params?: any) => {
    let response;
    if (params) {
      let queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }
    return response;
  };

  getFile = (url: string, params: any) => {
    let response;
    if (params) {
      let queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, { responseType: 'blob' });
    } else {
      response = axios.get(`${url}`, { responseType: 'blob' });
    }
    return response;
  };

  getMultiple = (urls: string, params: any) => {
    const reqs = [];
    let queryString = '';
    if (params) {
      queryString = params
        ? Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&')
        : '';
    }

    for (const url of urls) {
      reqs.push(axios.get(`${url}?${queryString}`));
    }
    return axios.all(reqs);
  };

  /**
   * post given data to url
   */
  create = (url: string, data: any) => {
    return axios.post(url, data);
  };

  /**
   * Updates patch data
   */
  updatePatch = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axios.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (url: string) => {
    return axios.delete(url);
  };

  /**
   * post given data to url with file
   */
  createWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post(url, formData, config);
  };

  /**
   * post given data to url with file
   */
  updateWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.patch(url, formData, config);
  };

  isUserAuthenticated = () => {
    const user = this.getLoggedInUser();

    if (!user || (user && !user.token)) {
      return false;
    }
    const decoded: any = jwtDecode(user.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    } else {
      return true;
    }
  };

  setLoggedInUser = (session: any) => {
    if (typeof window === 'undefined') return null;

    if (session) sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  };
  /**
   * Returns the logged in user
   */
  getLoggedInUser = () => {
    return getUserFromSession();
  };

  setUserInSession = (modifiedUser: any) => {
    if (typeof window === 'undefined') return null;
    let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (userInfo) {
      const { token, user } = JSON.parse(userInfo);
      this.setLoggedInUser({ token, ...user, ...modifiedUser });
    }
  };
}

/*
Check if token available in session
*/
let user = getUserFromSession();
if (user) {
  const { token } = user;
  if (token) {
    setAuthorization(token);
  }
}

export { APICore, setAuthorization };
