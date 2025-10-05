import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = [
  "Bookkeeping & Financial Reporting",
  "Tax Preparation & Planning",
  "Auditing & Assurance",
  "Payroll Management",
  "Business Consulting",
  "Budgeting & Forecasting",
  "Accounts Payable/Receivable",
];

function Services() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Services
      </Typography>
      <List>
        {services.map((service, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Services;