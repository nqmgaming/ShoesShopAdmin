import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "../DataChart/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData, EUKId } from "../MockDatachart";

const TransactionBottomRow = () => {
  return (
    <Grid container style={{
        display:'grid',
        gap:'1rem',
        gridTemplateColumns:'1fr 1fr'
        
    }}>
      <Grid item>
        <Paper style={{
            position:'relative',
            top:'1rem',
            height:'100%',
            width:'calc(100%-0.1rem)',
        }}>
          <p style={{
            padding:'0.5rem 1rem',
            margin:'0'
          }}>Các Size Giày (EU)</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper style={{
            position:'relative',
            top:'1rem',
            height:'100%',
            width:'calc(100%-0.1rem)'
        }}>
          <p style={{
            padding:'0.5rem 1rem',
            margin:'0'
          }}>Các Size Giày EU Kid</p>
          <DataChart type={"doughnut"} data={EUKId} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;