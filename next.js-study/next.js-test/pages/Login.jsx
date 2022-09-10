import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// api
import AuthService from "@/services/auth/authApi";

// redux connect
import { useDispatch } from "react-redux";
import { userLogin } from "@/store/reduxSlicer/user";

// login css
import style from "@/styles/user/login.module.css";

// bootstrap
import { Form, Button } from "react-bootstrap";

function Login(props) {
  const [thisUserId, setThisUserId] = useState("");
  const [thisUserPw, setThisUserPw] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogin = () => {
    AuthService.login(thisUserId, thisUserPw)
      .then((response) => {
        dispatch(userLogin(response.data));
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputUserId = (e) => {
    const thisId = e.target.value;
    setThisUserId(thisId);
  };

  const inputUserPw = (e) => {
    const thisPw = e.target.value;
    setThisUserPw(thisPw);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.loginEl}>
          <Form.Label htmlFor="user-id">아이디</Form.Label>
          <Form.Control id="user-id" type="text" onChange={inputUserId} />
        </div>

        <div className={style.loginEl}>
          <Form.Label htmlFor="user-pw">비밀번호</Form.Label>
          <Form.Control id="user-pw" type="password" onChange={inputUserPw} />
        </div>
        <div className={style.loginBtn}>
          <LoginButton variant="primary" type="button" onClick={handleLogin}>
            로그인
          </LoginButton>
        </div>
      </div>
    </div>
  );
}

export default Login;

const LoginButton = styled(Button)`
  background-color: red;
`;
