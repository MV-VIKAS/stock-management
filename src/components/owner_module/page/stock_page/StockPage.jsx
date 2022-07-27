import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import axios from "../../../../api/axios";
import stock from "./Stockpage.module.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const StockPage = () => {
  let [stockData, setStockData] = useState([]);
  let navigate = useNavigate();
  let handleEdit = id => {
    navigate(`/stock/userId/${id}`);
  };
  let remove = async id => {
    try {
      axios.delete(`https://localhost:8080//stock${id}`);
      console.log("SuccessFull");
    } catch (error) {
      console.log(error);
    }
    navigate("/ownerDashboard/stocks");
  };
  let fetchData = async () => {
    let { data } = await axios.get("/stock");
    setStockData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={stock.container}>
        {stockData.map(item => {
          let { address, name, id } = item;
          return (
            <div className={stock.cards}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <EditOutlined onClick={handleEdit(id)} />,
                  <DeleteOutlined onClick={remove(id)} />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={name}
                  description={address}
                />
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <PlusCircleTwoTone
          className={stock.icon}
          onClick={() => navigate("/createStock")}
        />
      </div>
    </>
  );
};

export default StockPage;
