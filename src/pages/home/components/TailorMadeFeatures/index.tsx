import { Section } from '@/components/layout/Section/Section';
import { s3 } from '@/utils/s3';
import { Box, Typography } from '@mui/material';

interface Features {
  title: string;
  content: string;
  icon: string;
}

const features: Features[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/01.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/02.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/03.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/04.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/05.svg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    icon: 'icons/07.svg',
  },
];

const TailorMadeFeatures = () => {
  return (
    <Section
      sx={{
        pt: { md: 0 },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }} align="center">
        Tailor-made features
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 300, maxWidth: '50%', mx: 'auto' }} align="center">
        Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual
        presentation.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
          mt: 4,
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              gap: 1,
            }}
          >
            <img src={s3(feature.icon)} alt="Feature Icon" style={{ width: '50px', height: '50px' }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                textAlign: 'left',
                mt: 1,
                //  fontSize: { md: '1rem' },
              }}
            >
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, textAlign: 'center', mt: 1 }}>
              {feature.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default TailorMadeFeatures;
