import { Section } from '@/components/layout/Section/Section';
import { s3 } from '@/utils/s3';
import { Box, Divider } from '@mui/material';

import { useTheme } from '@mui/material/styles';

const logoData = [
  {
    logo: 'logos/Airbnb.svg',
  },
  {
    logo: 'logos/FedEx.svg',
  },
  {
    logo: 'logos/Google.svg',
  },
  {
    logo: 'logos/Hubspot.svg',
  },
  {
    logo: 'logos/Microsoft.svg',
  },
  {
    logo: 'logos/Walmart.svg',
  },
];

const Logos = () => {
  //const theme = useTheme();
  return (
    <Section
      sx={
        {
          // py: 2,
        }
      }
    >
      <Box
        sx={
          {
            // flexWrap: 'wrap',
            // alignItems: 'center',
            // maxWidth: '1200px',
            // margin: '0 auto',
            // gap: 6,
          }
        }
      >
        <Divider
          sx={{
            display: 'block',
            mx: 'auto',
            width: '80%',
            border: 'none',
            height: '1px',
            background:
              'linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(216, 216, 216, 1) 50%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            py: 4,
            gap: 6,
            justifyContent: 'center',
          }}
        >
          {logoData.map((item, index) => (
            <Box
              key={index}
              src={s3(item.logo)}
              alt={`Logo ${index}`}
              component={'img'}
              sx={{
                maxWidth: { xs: '50%', md: 'auto' },
                mx: { xs: 'auto', md: 0 },
              }}
            />
          ))}
        </Box>
        <Divider
          sx={{
            display: 'block',
            mx: 'auto',
            width: '80%',
            border: 'none',
            height: '1px',
            background:
              'linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(216, 216, 216, 1) 50%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
      </Box>
    </Section>
  );
};

export default Logos;
