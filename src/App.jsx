import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Slide, useScrollTrigger } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Dashboard from './pages/Dashboard.jsx';
import Reports from './pages/Reports.jsx';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        position: 'relative',
        background: 'linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)',
        '&::before': {
          content: '""',
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 60%), radial-gradient(circle at 10% 80%, #0ea5e9 0%, transparent 60%)',
          opacity: 0.22,
          pointerEvents: 'none',
          animation: 'bgmove 18s linear infinite alternate',
        },
        '@keyframes bgmove': {
          '0%': { backgroundPosition: '80% 20%, 10% 80%' },
          '100%': { backgroundPosition: '60% 40%, 30% 60%' },
        },
      }}
    >
      <Router>
        <HideOnScroll>
          <AppBar
            position="fixed"
            elevation={12}
            sx={{
              left: 0,
              top: 24,
              width: '100vw',
              borderRadius: 3,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(22px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.22)',
              color: '#22223b',
              border: '1.5px solid #e0e7ff',
              zIndex: 1201,
              px: { xs: 1, sm: 6 },
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  fontWeight: 900,
                  letterSpacing: 1,
                  color: 'primary.main',
                  textShadow: '0 2px 8px #e0e7ff',
                  fontSize: { xs: 18, sm: 22 },
                  whiteSpace: 'nowrap',
                }}
              >
                علاء محمد عبدالغني
              </Typography>
              <Button
                color="primary"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 700,
                  mx: 1,
                  borderRadius: 3,
                  px: 2,
                  fontSize: 16,
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: 'rgba(99,102,241,0.13)',
                  },
                }}
              >
                الرئيسية
              </Button>
              <Button
                color="primary"
                component={Link}
                to="/contact"
                sx={{
                  fontWeight: 700,
                  mx: 1,
                  borderRadius: 3,
                  px: 2,
                  fontSize: 16,
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: 'rgba(14,165,233,0.13)',
                  },
                }}
              >
                تواصل
              </Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar sx={{ mb: 2 }} />
        <Container
          sx={{
            mt: { xs: 13, sm: 15 },
            mb: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '80vh',
            zIndex: 1,
            position: 'relative',
          }}
        >
          <Routes>
            {["/", "/contact"].map((path) => (
              <Route
                key={path}
                path={path}
                element={
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.5 }}
                    >
                      {path === "/" ? <Dashboard /> : <Reports />}
                    </motion.div>
                  </AnimatePresence>
                }
              />
            ))}
          </Routes>
        </Container>
        <Box
          component="footer"
          sx={{
            textAlign: 'center',
            py: 2,
            color: '#64748b',
            fontSize: 15,
            opacity: 0.88,
            letterSpacing: 1,
            zIndex: 2,
            position: 'relative',
          }}
        >
          &copy; {new Date().getFullYear()} Alaa Mohamed Abdelghany. All rights reserved.
        </Box>
      </Router>
    </Box>
  );
}

export default App;