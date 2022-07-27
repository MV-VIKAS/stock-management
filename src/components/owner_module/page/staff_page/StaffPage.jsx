import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import axios from "../../../../api/axios";
import staff from "./Staff.module.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const StaffPage = () => {
  let navigate = useNavigate();
  let [staffdata, setStaffData] = useState([]);
  let handleEdit = id => {
    navigate(`/owner/${id}`);
  };
  let remove = async uid => {
    try {
      axios.delete(`https://localhost:8080//owner/${uid}/staff`);
      console.log("SuccessFull");
    } catch (error) {
      console.log(error);
    }
    navigate("/ownerDashboard/stocks");
  };
  let fetchData = async () => {
    let { data } = await axios.get("/staff");
    setStaffData(data);
  };
  let id = "2313";
  let uid = "435";
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={staff.container}>
        {staffdata.map(item => {
          let { address, name } = item;
          return (
            <div className={staff.cards}>
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
                  <DeleteOutlined onClick={remove(uid)} />,
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
          className={staff.icon}
          onClick={() => navigate("/createStaff")}
        />
      </div>
    </>
  );
};

export default StaffPage;
