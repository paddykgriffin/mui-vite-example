import FooterNav from '@/components/navigation/FooterNav';
import { s3 } from '@/utils/s3';
import { Box, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component={'footer'}
      sx={[
        {
          color: theme => theme.vars.palette.grey[100],
          backgroundColor: theme => theme.vars.palette.common.black,
        },
        theme =>
          theme.applyStyles('dark', {
            color: theme.vars.palette.grey[100],
            backgroundColor: 'secondary.main',
          }),
      ]}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          py: 6,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            pb: { xs: 6, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box component={'img'} src={s3('logo-square.svg')} alt="Logo" />
          <Box
            sx={{
              py: 2,
              pb: { xs: 4, md: 0 },
              '& a': {
                color: theme => theme.vars.palette.grey[100],
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {' '}
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
                marginRight: '1rem',
              }}
            >
              Download Now
            </NavLink>{' '}
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              License
            </NavLink>
          </Box>
          <FooterNav />
          <Typography
            variant="body2"
            sx={{
              py: 2,
              fontWeight: 300,
              color: theme => theme.vars.palette.grey[400],
            }}
          >
            &copy; {year} Copyright . All rights reserved
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column' },
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ position: 'relative', textAlign: { xs: 'center', md: 'left' }, zIndex: 2, pb: 1 }}
          >
            Get the app
          </Typography>
          <Box
            src={s3('app-store-badge.svg')}
            alt=""
            component={'img'}
            sx={{ mx: { xs: 'auto', md: 0 }, width: { xs: '50%', md: 'auto' } }}
          />
          <Box
            src={s3('google-play-badge.svg')}
            alt=""
            component={'img'}
            sx={{ mx: { xs: 'auto', md: 0 }, width: { xs: '50%', md: 'auto' } }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
