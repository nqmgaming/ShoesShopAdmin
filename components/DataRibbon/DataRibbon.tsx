import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataRibbon = () => {
  const [totalProduct, setProduct] = useState({});
  const getTotalProduct = async () => {
    try {
      const res = await axios.get(
        "https://shoes-shop-api-unl0.onrender.com/statistical/totalProducts",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjQ3MDllMGM5MGEwODY0MmJkOGM1ZjAiLCJpYXQiOjE3MTU5NTgyOTB9.NkWUzkbquiUouZEpUdVqdNpZOspED6kC_ZF2P6UZRIUs",
          },
        }
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalProduct();
    console.log(totalProduct);
  });

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
          value={""}
          description={"The totals of all users in the current database"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Product"}
          value={"16"}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Order"}
          value={"4"}
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
          value={"18480 $"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
