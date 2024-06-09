import { Paper, Typography, IconButton, Tooltip } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <Paper
      style={{
        position: "relative",
        top: "1rem",
        height: "100%",
        width: "calc(100% - 0.1rem)",
        padding: "1rem 0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              fontSize={16}
            >{`${description} which is ${value}`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
