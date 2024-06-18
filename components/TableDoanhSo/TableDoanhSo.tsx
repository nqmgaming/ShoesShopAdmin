import React from "react";
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableDoanhSo = () => {
  const data = [
    {
      "stt": 1, "ngay": "2024-05-25", "email": "thinguyen04@gmail.com", "doanhThu": 4500 
    },
    {
      "stt": 2, "ngay": "2024-06-03", "email": "dobaoquoc@gmail.com", "doanhThu": 3200
    },
    {
      "stt": 3, "ngay": "2024-06-12", "email": "dobaoquoc04@gmail.com", "doanhThu": 7800
    },
    {
      "stt": 4, "ngay": "2024-06-07", "email": "dobaoquoc04@gmail.com", "doanhThu": 5600
    },
    {
      "stt": 5, "ngay": "2024-05-30", "email": "minhnq04@gmail.com", "doanhThu": 9100
    },
    {
      "stt": 6, "ngay": "2024-06-15", "email": "dinhdao04@gmail.com", "doanhThu": 2900
    },
    {
      "stt": 7, "ngay": "2024-06-01", "email": "nvc2004@gmail.com", "doanhThu": 6700
    },
    {
      "stt": 8, "ngay": "2024-05-22", "email": "nguyendinhthi2004@gmail.com", "doanhThu": 4300
    },
    {
      "stt": 9, "ngay": "2024-06-09", "email": "metarion2004@gmail.com", "doanhThu": 8500
    },
    {
      "stt": 10, "ngay": "2024-05-28", "email": "inuysah4002@gmail.com", "doanhThu": 3400
    }
  ];

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ngày</th>
            <th>Email</th>
            <th>Doanh Thu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.stt}</td>
              <td>{item.ngay}</td>
              <td>{item.email}</td>
              <td>{item.doanhThu.toLocaleString()} $</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default TableDoanhSo;