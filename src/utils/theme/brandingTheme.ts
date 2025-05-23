import { colorSchemes } from './../../store/features/themeSlice';
import {createTheme, Theme} from '@mui/material';
import { ThemeOptions } from '@mui/material';

import siteConfig from '@/site-config';
import { dark } from 'node_modules/@mui/material/esm/styles/createPalette';

const defaultTheme = createTheme();

const systemFont = [
    '-apple-system',
    'BlinkMacSystemFont',
    'Arial',
    'Roboto',
    'sans-serif'
];

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxl: true;
    }
}
//mode: 'light' | 'dark'
export const getDesignTokens = (mode: 'light' | 'dark') =>
({
    cssVariables: {
        cssVarPrefix: '',
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: siteConfig.theme.color.primary.light
                },
                secondary: {
                    main: siteConfig.theme.color.secondary.light
                }
            }
            : {
                primary: {
                    main: siteConfig.theme.color.primary.dark
                },
                secondary: {
                    main: siteConfig.theme.color.secondary.dark
                }
            })
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: ['OpenSans', ...systemFont].join(','),
        h1: {
            fontSize: defaultTheme.typography.pxToRem(72),
            fontWeight: 600
        },
        h2: {
            fontSize: defaultTheme.typography.pxToRem(48),
            fontWeight: 500
        },
        h3: {
            fontSize: defaultTheme.typography.pxToRem(40)
        },
        h4: {
            fontSize: defaultTheme.typography.pxToRem(28)
        },
        h5: {
            fontSize: defaultTheme.typography.pxToRem(24)
        },
        body1: {
            fontSize: defaultTheme.typography.pxToRem(18)
        },
        body2: {
            fontSize: defaultTheme.typography.pxToRem(14)
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
            xxl: 1920
        }
    },
}) as ThemeOptions;


export function getThemedComponents(theme: Theme) {
    return {
        components: {
            MuiContainer: {
                defaultProps: {
                    maxWidth: 'xxl'
                }
            }
        },
    }
}