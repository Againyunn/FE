import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import reducer from "./modules";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

const makeStore = (context) =>
  configureStore({
    reducer,

    // 사용할 미들웨어가 있다면 추가로 정의
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

// wrapper에 스토어를 바인딩
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
