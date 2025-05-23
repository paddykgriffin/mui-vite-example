import { Section } from '@/components/layout/Section/Section';
import { s3 } from '@/utils/s3';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const AppPromotion = () => {
  const theme = useTheme();
  return (
    <Section
      sx={{
        p: 0,
        lineHeight: 0.7,
        background: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }} align="left">
            Manage your projects <br /> from your mobile
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: { md: '550px' },
              pb: 4,
            }}
          >
            Download the app to manage your projects, keep track of the progress and complete tasks without
            procastinating. Stay on track and complete on time!
          </Typography>

          <Typography variant="body1" align="left" sx={{ position: 'relative', zIndex: 2, pb: 1 }}>
            Get the app
          </Typography>
          <Box src={s3('app-store.png')} alt="" component={'img'} sx={{ mr: 2 }} />
          <Box src={s3('play-store.png')} alt="" component={'img'} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'between', flexDirection: 'row', gap: 4 }}>
          <Box>
            <Box
              src={s3('phone-mockup-1.png')}
              alt=""
              component={'img'}
              sx={{ boxShadow: 12, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
            />
          </Box>
          <Box sx={{ pt: 10 }}>
            <Box
              src={s3('phone-mockup-2.png')}
              alt=""
              component={'img'}
              sx={{ boxShadow: 24, borderTopLeftRadius: 35, borderTopRightRadius: 35 }}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default AppPromotion;
