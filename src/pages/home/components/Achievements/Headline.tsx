import { s3 } from '@/utils/s3';
import { Box, Button, Grid, Typography } from '@mui/material';

const Headline = () => {
  return (
    <Box sx={{ pt: 12 }}>
      <Grid container sx={{ alignItems: 'center' }} columnGap={{ xs: 4, lg: 12 }}>
        <Grid size={5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box src={s3('phone-mockup.png')} component={'img'} sx={{ width: '100%' }} />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }} align="left">
            Headline
          </Typography>
          <Box src={s3('phone-mockup.png')} component={'img'} sx={{ width: '100%', display: { md: 'none' } }} />
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, position: 'relative', zIndex: 2, lineHeight: '1.9' }}
            align="left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
            cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo
            volutpat, pharetra, vel.
          </Typography>

          <Button
            href="#"
            variant="text"
            sx={{
              mt: 2,
              textTransform: 'none',
              fontWeight: 600,
              color: '#8C30F5',
              px: 0,
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                '& path': {
                  fill: theme => theme.palette.primary.main,
                },
              },
            }}
            endIcon={
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z"
                  fill="#8C30F5"
                />
              </svg>
            }
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Headline;
