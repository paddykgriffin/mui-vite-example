import { HeaderMenuLinks } from '@/components/navigation/HeaderMenuLinks';
import { Box } from '@mui/material';

const HeaderNav = () => {
  return (
    <Box
      className="header-nav"
      sx={[
        {
          display: { xs: 'flex' },
          gap: '16px',
          marginRight: '2rem',
          '& a': {
            color: theme => theme.vars.palette.grey[900],
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.main',
            },
          },
        },
        theme =>
          theme.applyStyles('dark', {
            '& a': {
              color: theme.vars.palette.grey[100],
              '&:hover': {
                color: 'primary.main',
              },
            },
          }),
      ]}
    >
      {HeaderMenuLinks.map(item => (
        <a
          href={item.path}
          key={item.title}
          style={{
            textDecoration: 'none',
          }}
        >
          {item.title}
        </a>
      ))}
    </Box>
  );
};

export default HeaderNav;
