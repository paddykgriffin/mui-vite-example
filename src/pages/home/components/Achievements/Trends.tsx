import { s3 } from '@/utils/s3';
import { Box, Grid, Typography } from '@mui/material';

const Trends = () => {
  return (
    <Box sx={{ pt: 12 }}>
      <Grid container sx={{ alignItems: 'center', pb: 3 }} spacing={{ md: 6 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }} align="left">
            Enter the world of all fashion trends
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, position: 'relative', zIndex: 2, lineHeight: '1.9' }}
            align="left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero
            in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.
          </Typography>
        </Grid>
      </Grid>
      <Box src={s3('light-bulbs.png')} component={'img'} sx={{ maxWidth: '100%' }} />
    </Box>
  );
};

export default Trends;
