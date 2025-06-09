import useCurrentTheme from '@/hooks/useCurrentTheme';
import { NavLink } from 'react-router-dom';
import { s3 } from '@/utils/s3';

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === 'dark' ? s3('logo-dark.svg') : s3('logo.svg');

  return (
    <NavLink to="/">
      <img src={LogoToRender} />
    </NavLink>
  );
}
