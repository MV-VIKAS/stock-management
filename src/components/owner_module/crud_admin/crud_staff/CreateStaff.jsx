import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";

const CreateStaff = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  let navigate = useNavigate();
  let PostData = async e => {
    e.preventDefault();
    try {
      let payload = {
        email,
        name,
        password,
        phone,
      };
      await axios.post("/staff/ownerid", payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
    setemail("");
    setname("");
    setpassword("");
    setunit_Price("");
    setphone("");
    navigate("/ownerDashboard/staff");
  };
  return (
    <Form
      // className={Reg_Form.Form_Body}
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
      <h1>Create Stock</h1>
      <Form.Item label="email">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="name Name">
        <Input
          placeholder="Enter your name Name"
          value={name}
          onChange={e => setname(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="password">
        <Input.Password
          placeholder="Enter your password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="phone">
        <Input
          placeholder="Enter your phone"
          value={phone}
          onChange={e => setphone(e.target.value)}
        />
      </Form.Item>
      <Button type="primary" onClick={PostData}>
        Submit
      </Button>
    </Form>
  );
};

export default CreateStaff;
