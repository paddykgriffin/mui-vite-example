import HeaderNav from '@/components/navigation/HeaderNav';
import ModeToggle from '@/components/layout/Header/ModeToggle';
import { Container, AppBar, Box } from '@mui/material';
import { useHeader } from '@/components/layout/Header/HeaderContext';
import { useDarkMode } from '@/hooks/useDarkMode';
import Logo from '@/components/common/Logo/Logo';
import SideBarNav from '@/components/layout/Header/SideBarNav';
import siteConfig from '@/site-config';
import { s3 } from '@/utils/s3';

export default function Header() {
  const { isNavTransparent, isNavVisible, mainNavRef } = useHeader();
  const { isDarkMode } = useDarkMode();
  const { sidebarNav } = siteConfig.layout.header;

  return (
    <AppBar
      sx={[
        {
          position: 'fixed',
          display: 'inherit',
          p: 0,
          top: !isNavVisible ? -(mainNavRef.current?.offsetHeight || '80px') : 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backgroundImage: 'inherit',
        },
      ]}
    >
      <Box
        component="nav"
        sx={{
          py: 2,
          background: isNavTransparent ? 'transparent' : isDarkMode ? 'black' : 'white',
          boxShadow: isNavTransparent ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          maxWidth="lg"
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& img': {
                mr: 6,
                height: '2rem',
              },
              '& .header-nav': {
                display: { xs: 'none', md: 'flex' },
              },
            }}
          >
            <Logo />
            <HeaderNav />
          </Box>
          <Box
            sx={{
              display: { xs: 'flex' },
              alignItems: 'center',
              gap: 2,
              '& #mode-toggle': {
                display: { xs: 'none', md: 'flex' },
              },
            }}
          >
            <Box
              src={s3('app-store-badge.svg')}
              alt=""
              component={'img'}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <Box
              src={s3('google-play-badge.svg')}
              alt=""
              component={'img'}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <ModeToggle />
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sidebarNav && <SideBarNav />}
            </Box>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}
