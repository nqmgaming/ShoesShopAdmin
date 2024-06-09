import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataRibbon = () => {
  const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjQ3MDllMGM5MGEwODY0MmJkOGM1ZjAiLCJpYXQiOjE3MTU5NTgyOTB9.NkWUzkbquiUouZEpUdVqdNpZOspED6kC_ZF2P6UZRIU"

  const [totalProduct, setProduct] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [totalOder, setTotalOder] = useState([]);
  const [Doanhthu, setDoanhThu] = useState([]);
  
  const getData = async () => {
    try {
      const product = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalProducts",
        {
          headers: {
            Authorization:
              API_KEY,
          },
        }
      );

      const user = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalUsers",
        {
          headers: {
            Authorization:
              API_KEY,
          },
        }
      );

      const oder = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalOrders",
        {
          headers: {
            Authorization:
              API_KEY,
          },
        }
      );

      const doanhthu = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalRevenue",
        {
          headers: {
            Authorization:
              API_KEY,
          },
        }
      );

      setProduct(product.data);
      setTotalUser(user.data);
      setTotalOder(oder.data);
      setDoanhThu(doanhthu.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(totalProduct);
  },[]);

  //Giao dien
  return (
    <Grid
      container
      gap={2}
      style={{
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <Grid
        style={{
          marginLeft: "4rem",
        }}
      >
        <DataCard
          title={"Total User"}
          value={totalUser.totalUsers}
          description={"The totals of all users in the current database"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Product"}
          value={totalProduct.totalProducts}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Order"}
          value={totalOder.totalOrders}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid
        style={{
          marginRight: "4rem",
        }}
      >
        <DataCard
          title={"Tổng doanh thu"}
          value={Doanhthu.totalRevenue}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
