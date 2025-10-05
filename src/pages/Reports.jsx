import React from 'react';
import { Paper, Typography, Box, TextField, Button, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
    <Fade in timeout={1000}>
      <Paper
        sx={{
          p: { xs: 3, sm: 5 },
          maxWidth: 520,
          mx: 'auto',
          borderRadius: 8,
          boxShadow: 12,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#22223b', fontWeight: 500 }}>
          Interested in working together or have questions? Send a message:
        </Typography>
        <Box
          component="form"
          action="https://formspree.io/f/xgvnybnv"
          method="POST"
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField
            label="Your email"
            name="email"
            type="email"
            required
            variant="outlined"
            sx={{ borderRadius: 2, background: '#f3f4f6' }}
          />
          <TextField
            label="Your message"
            name="message"
            multiline
            minRows={4}
            required
            variant="outlined"
            sx={{ borderRadius: 2, background: '#f3f4f6' }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              mt: 1,
              borderRadius: 4,
              background: 'linear-gradient(90deg, #6366f1 0%, #0ea5e9 100%)',
              fontWeight: 900,
              letterSpacing: 1,
              color: '#fff',
              boxShadow: 3,
              fontSize: 18,
              py: 1.5,
              transition: 'background 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Fade>
  );
}

export default Contact;