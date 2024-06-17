import { Box } from '@mui/material';
import React from 'react';
import DataRibbon from './DataRibbon';
import TransactionsPerDay from './TransactionPerDay/TransactionPerDay';
import TransactionBottomRow from './TransactionBottomrow/TransactionBottom';
import TableDoanhSo from './TableDoanhSo';
import Footer from './Footer';

export const Dashboard: React.FC = () => {
    return (
        <Box>
            <DataRibbon></DataRibbon>
            <TransactionsPerDay></TransactionsPerDay>
            <TableDoanhSo></TableDoanhSo>
            <Footer></Footer>
        </Box>
    )
}

export default Dashboard
