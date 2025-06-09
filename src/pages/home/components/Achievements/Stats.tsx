import { s3 } from '@/utils/s3';
import { Box, Grid, Typography } from '@mui/material';

interface Features {
  title: string;
  content: string;
  icon: string;
}

const features: Features[] = [
  {
    title: '10,000+',
    content: 'Downloads per day',
    icon: 'icons/01.svg',
  },
  {
    title: '2 Million',
    content: 'Users',
    icon: 'icons/04.svg',
  },
  {
    title: '500+',
    content: 'Clients',
    icon: 'icons/05.svg',
  },
  {
    title: '140',
    content: 'Countries',
    icon: 'icons/07.svg',
  },
];

const Stats = () => {
  return (
    <Box>
      <Grid container spacing={6} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {' '}
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }} align="left">
            Our 18 years <br />
            of achievements
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, position: 'relative', zIndex: 2, lineHeight: '1.9' }}
            align="left"
          >
            With our super powers we have reached this
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={6}>
            {features.map((feature, index) => (
              <Grid key={index} size={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <img src={s3(feature.icon)} alt="Feature Icon" style={{ width: '50px', height: '50px' }} />
                  <div>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        textAlign: 'left',
                        mt: 1,
                        //  fontSize: { md: '1rem' },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 400 }}>
                      {feature.content}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stats;
