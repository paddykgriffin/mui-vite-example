import { SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
  darkMode: true,
  theme: {
    color: {
      primary: {
        light: '#2EC5CE',
        dark: '#f54251',
      },
      secondary: {
        light: '#8C30F5',
        dark: '#000000',
      },
    },
  },
  layout: {
    header: {
      transparent: true,
      hideOnScroll: false,
      mainNav: true,
      sidebarNav: true
    }
  }
};

export default siteConfig;
