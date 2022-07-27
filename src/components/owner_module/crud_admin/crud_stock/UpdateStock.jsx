import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";

const Upadatestock = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [category, setcategory] = useState();
  const [product_Name, setproduct_Name] = useState();
  const [quantity, setquantity] = useState();
  const [reorder_Level, setreorder_Level] = useState();
  const [reorder_Quantity, setreorder_Quantity] = useState();
  const [total_Cost, settotal_Cost] = useState();
  const [unit_Price, setunit_Price] = useState();

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  let navigate = useNavigate();
  let PostData = async e => {
    e.preventDefault();
    let userId = "12323";
    try {
      let payload = {
        category,
        product_Name,
        quantity,
        reorder_Level,
        reorder_Quantity,
        total_Cost,
        unit_Price,
      };
      await axios.put(`/stock/userId/${userId}`, payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
    setcategory("");
    setproduct_Name("");
    setquantity("");
    setunit_Price("");
    setreorder_Level("");
    setreorder_Quantity("");
    settotal_Cost("");
    navigate("/ownerDashboard/stocks");
  };
  let getUser = async () => {
    let productname = "2342342";
    try {
      let { data } = await axios.get(
        `http://localhost:8080//stock/product/${productname}`
      );
      let {
        category,
        product_Name,
        quantity,
        reorder_Level,
        reorder_Quantity,
        total_Cost,
        unit_Price,
      } = data;
      setcategory(category);
      setproduct_Name(product_Name);
      setquantity(quantity);
      setunit_Price(unit_Price);
      setreorder_Level(reorder_Level);
      setreorder_Quantity(reorder_Quantity);
      settotal_Cost(total_Cost);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Form
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
      <h1>Update Stock</h1>
      <Form.Item label="category">
        <Input
          placeholder="Enter your category"
          value={category}
          onChange={e => setcategory(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="product_Name Name">
        <Input
          placeholder="Enter your product_Name Name"
          value={product_Name}
          onChange={e => setproduct_Name(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="quantity">
        <Input
          placeholder="Enter your quantity"
          value={quantity}
          onChange={e => setquantity(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="reorder_Level">
        <Input
          placeholder="Enter your reorder_Level"
          value={reorder_Level}
          onChange={e => setreorder_Level(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="reorder_Quantity">
        <Input
          placeholder="Enter your reorder_Quantity"
          value={reorder_Quantity}
          onChange={e => setreorder_Quantity(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="total_Cost">
        <Input
          value={total_Cost}
          onChange={e => settotal_Cost(e.target.value)}
          placeholder="Enter your total_Cost"
        />
      </Form.Item>
      <Form.Item label="unit_Price">
        <Input
          type="tel"
          placeholder="Enter your unit_Price"
          value={unit_Price}
          onChange={e => setunit_Price(e.target.value)}
        />
      </Form.Item>
      <Button type="primary" onClick={PostData}>
        Submit
      </Button>
    </Form>
  );
};

export default Upadatestock;
