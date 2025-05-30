import { HeaderMenuLinks } from '@/components/navigation/HeaderMenuLinks';
import { Box } from '@mui/material';

const HeaderNav = () => {
  return (
    <Box
      className="header-nav"
      sx={{
        display: 'flex',
        gap: '16px',
        marginRight: '2rem',
        '& a': {
          color: 'black',
          fontWeight: 500,
          fontSize: '1rem',
        },
      }}
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
