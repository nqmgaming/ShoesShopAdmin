import React from "react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <footer style={{
        position:'static',
        bottom:'0',
        left:'0',
        width:'100%',
        marginTop:'5rem'
    }}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul role="menu" style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            listStyleType:'none',
            margin:"auto",
            width:'100%'
        }}>
            <li style={{
                padding:'1rem'
            }}><a href=""> LINK GITHUB</a></li>
             <li style={{
                padding:'1rem'
            }}><a href=""> LINK GOOGLESHEET</a></li>
             <li style={{
                padding:'1rem'
            }}><a href=""> LINK ZALO</a></li>
             <li style={{
                padding:'1rem'
            }}><a href=""> LINK HỌP MEET</a></li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
