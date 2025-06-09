import { FooterMenuLinks } from '@/components/navigation/FooterMenuLinks';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const FooterNav = () => {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '16px',
          '& a': {
            color: theme => theme.vars.palette.grey[100],
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
            },
          }),
      ]}
    >
      {FooterMenuLinks.map(item => (
        <NavLink
          to={item.path}
          key={item.title}
          style={{
            //  fontSize: '0.875rem',
            textDecoration: 'none',
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </Box>
  );
};

export default FooterNav;
