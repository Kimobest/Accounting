import React from 'react';
import { Paper, Typography, Box, Avatar, Fade, Chip, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Dashboard() {
  return (
    <Fade in timeout={900}>
      <Paper
        sx={{
          p: { xs: 3, sm: 7 },
          textAlign: 'center',
          borderRadius: 12,
          boxShadow: '0 12px 48px 0 rgba(31,38,135,0.22)',
          background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
          backdropFilter: 'blur(22px)',
          direction: 'rtl',
          position: 'relative',
          overflow: 'hidden',
          transition: 'box-shadow 0.4s cubic-bezier(.4,2,.6,1), background 0.5s',
        }}
      >
        {/* زخرفة خلفية عصرية متدرجة ودوائر شفافة */}
        <Box
          sx={{
            position: 'absolute',
            top: -70,
            left: -70,
            width: 200,
            height: 200,
            bgcolor: 'primary.light',
            opacity: 0.12,
            borderRadius: '50%',
            zIndex: 0,
            filter: 'blur(2px)',
            animation: 'float1 7s ease-in-out infinite alternate',
            '@keyframes float1': {
              '0%': { transform: 'translateY(0)' },
              '100%': { transform: 'translateY(30px)' }
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 260,
            height: 260,
            bgcolor: 'secondary.light',
            opacity: 0.10,
            borderRadius: '50%',
            zIndex: 0,
            filter: 'blur(2px)',
            animation: 'float2 9s ease-in-out infinite alternate',
            '@keyframes float2': {
              '0%': { transform: 'translateY(0)' },
              '100%': { transform: 'translateY(-30px)' }
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 12,
            background: 'linear-gradient(90deg, #6366f1 0%, #0ea5e9 100%)',
            opacity: 0.18,
            zIndex: 0,
            animation: 'gradientMove 12s linear infinite alternate',
            '@keyframes gradientMove': {
              '0%': { opacity: 0.18 },
              '100%': { opacity: 0.28 }
            }
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
          <Avatar
            src="/alaa.jpg"
            sx={{
              width: 150,
              height: 150,
              mb: 2,
              bgcolor: 'primary.main',
              fontSize: 70,
              boxShadow: 8,
              border: '5px solid #fff',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.07) rotate(-2deg)',
                boxShadow: 16,
              },
              animation: 'avatarPop 1.2s cubic-bezier(.4,2,.6,1)',
              '@keyframes avatarPop': {
                '0%': { transform: 'scale(0.7)', opacity: 0 },
                '80%': { transform: 'scale(1.08)', opacity: 1 },
                '100%': { transform: 'scale(1)', opacity: 1 }
              }
            }}
          >
            <PersonIcon sx={{ fontSize: 90 }} />
          </Avatar>
          <Typography variant="h3" gutterBottom sx={{
            fontWeight: 900,
            color: 'primary.main',
            letterSpacing: 1,
            fontFamily: 'Cairo, Tajawal, "Segoe UI", Arial, sans-serif',
            fontSize: { xs: 26, sm: 36 },
            animation: 'fadeInUp 1.1s cubic-bezier(.4,2,.6,1)',
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}>
            علاء محمد عبدالغني
          </Typography>
          <Chip
            label="محاسب قانونى - خبير ضرائب - خبير مثمن - مصفى قضائى"
            color="primary"
            variant="outlined"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 13, sm: 16 },
              px: 2,
              py: 1,
              mt: 1,
              mb: 2,
              background: 'rgba(99,102,241,0.07)',
              borderRadius: 2,
              borderColor: 'primary.light',
              letterSpacing: 0.5,
              animation: 'fadeInUp 1.3s cubic-bezier(.4,2,.6,1)',
            }}
          />
        </Box>
        <Divider sx={{ my: 3, opacity: 0.25 }} />
        <Typography variant="body1" sx={{
          mb: 2,
          fontSize: { xs: 16, sm: 19 },
          color: '#22223b',
          fontWeight: 500,
          lineHeight: 2,
          zIndex: 1,
          position: 'relative',
          animation: 'fadeInUp 1.5s cubic-bezier(.4,2,.6,1)',
        }}>
          مرحباً بكم! أنا علاء محمد عبدالغني، محاسب قانونى معتمد. أمتلك خبرة واسعة في الإدارة المالية، المراجعة، الاستشارات الضريبية، وتقييم الأصول وتصفيتها. أساعد الشركات والأفراد على تحقيق أهدافهم المالية بدقة واحترافية وشفافية.
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: { xs: 15, sm: 17 },
          color: '#334155',
          fontWeight: 400,
          zIndex: 1,
          position: 'relative',
          animation: 'fadeInUp 1.7s cubic-bezier(.4,2,.6,1)',
        }}>
          تصفح صفحة التواصل ولا تتردد في التواصل للاستشارة أو التعاون.
        </Typography>
      </Paper>
    </Fade>
  );
}

export default Dashboard;