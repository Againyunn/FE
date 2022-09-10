import axios from "axios";
import AxiosInterceptor from "@/apis/AxiosInterceptor";

// json형태로 처리한 API
let authApi = require("@/jsonApi/authApi.json");

/**
 * 로그인 함수
 * @param {*} userId
 * @param {*} password
 * @returns 정상: userId, gender, age
 */
const login = async (userId, password) => {
  const res = await AxiosInterceptor(
    authApi.loginApi
    //   {
    //   url: "login/",
    //   method: "get",
    //   data: {
    //     userId,
    //     password,
    //   },
    // }
  );
  return res;
};
const AuthService = {
  login,
};
export default AuthService;
