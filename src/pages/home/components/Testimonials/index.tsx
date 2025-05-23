import { Section } from '@/components/layout/Section/Section';
import { s3 } from '@/utils/s3';
import { Box, Typography } from '@mui/material';
//import { useTheme } from '@mui/material/styles';

interface Testimonial {
  quote: string;
  icon: string;
  name: string;
  jobTitle: string;
  size: 'small' | 'large';
}

export const testimonials: Testimonial[] = [
  {
    name: 'Floyd Miles',
    jobTitle: 'Vice President, GoPro',
    quote:
      'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
    icon: 'logos/Hubspot.svg',
    size: 'small',
  },
  {
    name: 'Jane Cooper',
    jobTitle: 'CEO, Airbnb',
    quote:
      'I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.',
    icon: 'logos/Airbnb.svg',
    size: 'large',
  },
  {
    name: 'Kristin Watson',
    jobTitle: 'Co-Founder, BookMyShow',
    quote: 'Landify saved our time in designing my company page.',
    icon: 'logos/BookMyShow.svg',
    size: 'small',
  },
];

const Testimonials = () => {
  //const theme = useTheme();
  const SvgBackground = () => (
    <svg width="143" height="120" viewBox="0 0 143 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3" clipPath="url(#clip0_13219_2514)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
          fill="#2EC5CE"
        />
      </g>
      <defs>
        <clipPath id="clip0_13219_2514">
          <rect width="143" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <Section
      sx={{
        height: 'calc(100vh - 50px)',
        pb: 0,
        background: '#D5FAFC',
        '& svg': { position: 'absolute' },
      }}
    >
      <SvgBackground />

      <Box
        sx={{
          px: 12,
          pt: 8,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 2 }} align="left">
          Real Stories from
          <br /> Real Customers
        </Typography>
        <Typography variant="body1" align="left" sx={{ position: 'relative', zIndex: 2 }}>
          Get inspired by these stories.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            top: -100,
            maxWidth: { md: '820px' },
            mx: 'auto',
            zIndex: 1,
            display: 'grid',

            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 1,
            alignItems: 'center',
            '& :first-child': {
              gridArea: '1 / 1 / 3 / 2',
            },
            '& :last-child': {
              gridArea: '2 / 2 / 3 / 3',
              mt: 0,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                p: 3,
                gap: 1,
                mt: 4,
                backgroundColor: '#fff',
                borderRadius: 1.5,
                boxShadow: 12,
                width: testimonial.size === 'large' ? '445px' : '350px',
                textAlign: 'left',
              }}
            >
              <Box
                src={s3(testimonial.icon)}
                alt="Testimonial Icon"
                sx={{
                  height: '40px',
                  ml: 0,
                }}
                component={'img'}
              />

              <Box
                sx={{
                  mt: 2,
                  pl: 3.5,
                  position: 'relative',
                  '& svg': { left: 0, top: 0, width: '15px', height: '15px' },
                }}
              >
                <SvgBackground />
                <Typography variant="body1" sx={{ fontWeight: 300, pb: 3 }}>
                  {' '}
                  {testimonial.quote}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 600, mb: 0, pb: 0 }}>
                  {testimonial.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--palette-grey-700)',
                  }}
                >
                  {testimonial.jobTitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
};

export default Testimonials;
