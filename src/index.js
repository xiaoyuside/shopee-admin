import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import zhCN from "antd/es/locale/zh_CN";

const isDev = process.env.NODE_ENV === "development";
if (!isDev) {
  console.log = function () {};
}

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
