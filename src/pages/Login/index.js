import React from "react";
import "./index.less";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginMock } from "../../api";

const Login = () => {
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  //   loginMock(values.username, values.password)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // take use of await/async to simplify Promise
  const onFinish = async (values) => {
    const response = await loginMock(values.username, values.password);
    console.log(response.data);
  };

  // validate pwd
  const customizedValidator = (rule, value) => {
    // console.log(rule, value);
    return new Promise((resolve, reject) => {
      if (!value) {
        reject(new Error("pwd have tobe entered"));
      } else if (value.length < 2) {
        reject(new Error("pwd length must >= 2"));
      } else if (value.length > 4) {
        reject(new Error("pwd length must <= 4"));
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        reject(new Error("不符合正则"));
      } else {
        resolve();
      }
    });
  };
  return (
    <div className="login">
      <header className="login-header">
        <img
          src="https://t.u1f.cn/images/2017/08/22/1T1563945-40.th.jpg"
          alt="logo"
        />
        <h1>shopee admin 管理系统</h1>
      </header>
      <section className="login-content">
        <h1>登录</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your Password!" },
              {
                max: 4,
                message: "Please enter <= 4",
              },
              {
                min: 2,
                message: "Please enter >=2",
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "Please enter: /^[a-zA-Z0-9_]+$/",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
              { validator: customizedValidator },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Login;
