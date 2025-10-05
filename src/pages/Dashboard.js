import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const data = {
  income: 5000,
  expenses: 3200,
  balance: 1800,
};

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Income</Typography>
          <Typography variant="h4" color="success.main">${data.income}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Expenses</Typography>
          <Typography variant="h4" color="error.main">${data.expenses}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Balance</Typography>
          <Typography variant="h4" color="primary.main">${data.balance}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
