import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const transactions = [
  { date: '2024-06-01', description: 'Salary', amount: 3000, type: 'Income' },
  { date: '2024-06-03', description: 'Office Rent', amount: -1200, type: 'Expense' },
  { date: '2024-06-05', description: 'Utilities', amount: -200, type: 'Expense' },
];

function Transactions() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Transactions</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((tx, idx) => (
              <TableRow key={idx}>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.description}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell align="right" style={{ color: tx.amount < 0 ? 'red' : 'green' }}>
                  ${Math.abs(tx.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Transactions;
