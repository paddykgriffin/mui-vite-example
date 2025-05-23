import useCurrentTheme from '@/hooks/useCurrentTheme';
import Logo from '@/assets/images/Logo.svg';
import LogoDark from '@/assets/images/LogoDark.svg';
import { NavLink } from 'react-router-dom';
import { s3 } from '@/utils/s3';

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === 'dark' ? s3('logo.svg') : s3('logo.svg');

  return (
    <NavLink to="/">
      <img src={LogoToRender} />
    </NavLink>
  );
}
