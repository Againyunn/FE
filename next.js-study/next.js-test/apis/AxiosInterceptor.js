import axios from "axios";
import Router from "next/router";

const AxiosInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// request interceptors
AxiosInterceptor.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// response interceptors
AxiosInterceptor.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    const status = error.response.status;

    switch (status) {
      // authentication (token related issues)
      case 401: {
        // const originalRequest = error.config;
        // 401 오류 로직 예시
        // if (
        //   error.response.status === 401 &&
        //   originalRequest.url === "http://127.0.0.1:3000/v1/auth/token"
        // ) {
        //   router.push("/login");
        //   return Promise.reject(error);
        // }

        // if (error.response.status === 401 && !originalRequest._retry) {
        //   originalRequest._retry = true;
        //   const refreshToken = localStorageService.getRefreshToken();
        //   return axios
        //     .post("/auth/token", {
        //       refresh_token: refreshToken,
        //     })
        //     .then((res) => {
        //       if (res.status === 201) {
        //         localStorageService.setToken(res.data);
        //         axios.defaults.headers.common["Authorization"] =
        //           "Bearer " + localStorageService.getAccessToken();
        //         return axios(originalRequest);
        //       }
        //     });
        // }
        return Promise.reject(error.message);
      }

      // forbidden (permission related issues)
      case 403: {
        console.log("에러 발생");
        // 경로 이동 → hook인 useRouter는 사용 불가
        Router.push("/");
        return Promise.reject(error.message);
      }

      // bad request
      case 400: {
        return Promise.reject(error.message);
      }

      // not found
      case 404: {
        return Promise.reject(error.message);
      }

      // conflict
      case 409: {
        return Promise.reject(error.message);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error.message);
      }

      // generic  error (server related) unexpected
      default: {
        return Promise.reject(error.message);
      }
    }
  }
);

export default AxiosInterceptor;
