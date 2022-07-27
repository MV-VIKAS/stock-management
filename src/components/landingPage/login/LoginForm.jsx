import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { ContextApiProvider } from "../../../api/ContextApi";
import login from "./Login.module.css";

const LoginForm = () => {
  let { setLogin, setRegister } = useContext(ContextApiProvider);
  let navigate = useNavigate();
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let handleSwitch = () => {
    setLogin(false);
    setRegister(true);
  };
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  let fetchData = async e => {
    e.preventDefault();
    try {
      let payload = {
        username,
        password,
      };
      await axios.post("/owner/login", payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
    setPassword("");
    setUsername("");
    navigate("/ownerDashboard/stocks");
  };

  return (
    <Form
      className={login.loginForm_body}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Login Form</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your Registered username"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your Registered username"
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={fetchData}>
          Submit
        </Button>
      </Form.Item>
      <div className={login.switch}>
        <span>Not an user?</span>
        <span onClick={handleSwitch}>Register!!</span>
      </div>
    </Form>
  );
};

export default LoginForm;
