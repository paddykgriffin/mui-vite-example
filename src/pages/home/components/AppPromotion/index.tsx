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
          display: { md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ pb: { xs: 6, md: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
              position: 'relative',
              zIndex: 2,
              pt: { xs: 6, md: 0 },
            }}
          >
            Manage your projects <br /> from your mobile
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: { md: '550px' },
              pb: 4,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Download the app to manage your projects, keep track of the progress and complete tasks without
            procastinating. Stay on track and complete on time!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column' },
            }}
          >
            <Typography
              variant="body1"
              sx={{ position: 'relative', textAlign: { xs: 'center', md: 'left' }, zIndex: 2, pb: 1 }}
            >
              Get the app
            </Typography>
            <Box>
              <Box
                src={s3('app-store-badge.svg')}
                alt=""
                component={'img'}
                sx={{
                  width: { xs: '50%', md: 'auto' },
                  mb: { xs: 2, md: 0 },
                  mx: { xs: 'auto', md: 0 },
                  mr: { md: 2 },
                }}
              />
              <Box
                src={s3('google-play-badge.svg')}
                alt=""
                component={'img'}
                sx={{
                  width: { xs: '50%', md: 'auto' },
                  mx: { xs: 'auto', md: 0 },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'between' },
            flexDirection: 'row',
            gap: { md: 4 },
          }}
        >
          <Box>
            <Box
              src={s3('phone-mockup-1.png')}
              alt=""
              component={'img'}
              sx={{
                boxShadow: 12,
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>
          <Box sx={{ pt: { xs: 2, md: 10 } }}>
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
