import siteConfig from '@/site-config';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { colorSchemes, setThemeMode } from '@/store/features/themeSlice';

import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const ModeToggle = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const dispatch = useAppDispatch();

  return siteConfig.darkMode ? (
    <Tooltip title={isDarkMode ? 'Turn on Light' : 'Turn on Dark'} arrow placement="bottom">
      <IconButton
        id="mode-toggle"
        disableTouchRipple
        onClick={() => dispatch(setThemeMode(isDarkMode ? colorSchemes.light : colorSchemes.dark))}
        sx={[
          {
            color: theme => (theme.palette.mode === 'dark' ? 'grey.100' : 'grey.100'),
            background: theme.vars.palette.primary.main,
            height: '40px',
            '&:hover': {
              background: theme.vars.palette.secondary.main,
            },
          },
          theme =>
            theme.applyStyles('dark', {
              color: theme.vars.palette.grey[100],
              background: theme.vars.palette.primary.main,
              '&:hover': {
                background: theme.vars.palette.secondary.main,
              },
            }),
        ]}
      >
        {isDarkMode ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  ) : null;
};

export default ModeToggle;
