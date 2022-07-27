import React, { useContext, useState } from "react";
import Reg_Form from "./Registration.module.css";
import { Form, Input, Button } from "antd";
import { ContextApiProvider } from "../../../api/ContextApi";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "../../../api/axios";

const RegistrationFrom = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [address, setAddress] = useState();
  const [company, setCompany] = useState();
  const [department, setDepartment] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  let { setLogin, setRegister } = useContext(ContextApiProvider);
  let handleSwitch = () => {
    setRegister(false);
    setLogin(true);
  };
  let fetchData = async e => {
    e.preventDefault();
    try {
      let payload = {
        address,
        company,
        department,
        email,
        name,
        password,
        contact,
      };
      await axios.post("/owner", payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
    setAddress("");
    setCompany("");
    setDepartment("");
    setContact("");
    setEmail("");
    setName("");
    setPassword("");
    setLogin(true);
    setRegister(false);
  };
  return (
    <Form
      className={Reg_Form.Form_Body}
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 15,
      }}
      layout="horizontal"
      initialValues={{
        disabled: componentDisabled,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <h1>OWNER REGISTRATION</h1>
      <Form.Item label="Address">
        <Input
          placeholder="Enter your Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Company Name">
        <Input
          placeholder="Enter your Company Name"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Department">
        <Input
          placeholder="Enter your Department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Name">
        <Input
          placeholder="Enter your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your Password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item label="Contact">
        <Input
          type="tel"
          placeholder="Enter your Contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </Form.Item>
      <Button type="primary" onClick={fetchData}>
        Submit
      </Button>
      <div className={Reg_Form.switch}>
        <span>Already an user?</span>
        <span onClick={handleSwitch}>Login!!</span>
      </div>
    </Form>
  );
};

export default RegistrationFrom;
