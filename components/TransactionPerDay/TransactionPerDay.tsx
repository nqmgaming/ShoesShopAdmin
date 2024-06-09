import { Card, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import DataChart from "../DataChart/DataChart";
import { lineChartData } from "../MockDatachart";
import React, { useState, useEffect } from "react";
import axios from "axios";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

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

      const oder = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalOrders",
        {
          headers: {
            Authorization:
              API_KEY,
          },
        }
      );

      setProduct(product.data);
      setTotalOder(oder.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(totalProduct);
  },[]);

  return (
    <Grid
      container
      gap={2}
      style={{
        display: "flex",
      }}
    >
      <Paper
        style={{
          display: "block",
          padding: "1rem 2rem",
          width: "100%",
          marginTop:'100px'
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            width: "100%",
          }}
        >
          <Typography>Thống kê theo ngày</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            maxWidth: "100%",
            width: "100%",
          }}
        >
          <Card
            style={{
              textAlign: "center",
              padding: "1rem",
              borderRadius: "8px",
              width: "100%",
            }}
            variant={"outlined"}
          >
            <div
              style={{
                fontSize: "1.8rem",
              }}
            >
              <Typography>Total Products</Typography>
            </div>
            <div
              style={{
                fontSize: "1.2rem",
              }}
            >
              <Typography>{totalProduct.totalProducts}</Typography>
            </div>
          </Card>
          <Card
            style={{
              textAlign: "center",
              padding: "1rem",
              borderRadius: "8px",
              width: "100%",
            }}
            variant={"outlined"}
          >
            <div
              style={{
                fontSize: "1.8rem",
              }}
            >
              <Typography>Lượt Order</Typography>
            </div>
            <div
              style={{
                fontSize: "1.2rem",
              }}
            >
              <Typography>{totalOder.totalOrders}</Typography>
              <Typography fontSize={14}>
                Tỉ lệ giao hàng thành công :100%
              </Typography>
            </div>
          </Card>
          <Card
            style={{
              textAlign: "center",
              padding: "1rem",
              borderRadius: "8px",
              width: "100%",
            }}
            variant={"outlined"}
          >
            <div
              style={{
                fontSize: "1.8rem",
              }}
            >
              <Typography>Hoàn Trả</Typography>
            </div>
            <div
              style={{
                fontSize: "1.2rem",
              }}
            >
              <Typography>Đơn đã hoàn trả :0</Typography>
              <Typography fontSize={14}>
                Tỉ lệ hoàn trả hàng :0%
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
