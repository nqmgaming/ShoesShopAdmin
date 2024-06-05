import React from "react";
import { Card, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import DataChart from "../DataChart/DataChart";
import { lineChartData } from "../MockDatachart";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

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
          <Typography>TransActions per day</Typography>
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
              <Typography>16</Typography>
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
              <Typography>4</Typography>
              <Typography fontSize={14}>
                100%
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
              <Typography>0%</Typography>
              <Typography fontSize={14}>
                0%
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
