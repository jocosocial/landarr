import {createTheme} from '@mui/material/styles';

// Colors come from tricordarr/src/Styles/Theme.ts.
export const twitarrPrimary = 'rgb(6, 57, 83)';

export const theme = createTheme({
  cssVariables: {colorSchemeSelector: 'media'},
  colorSchemes: {
    light: {
      palette: {
        primary: {main: 'rgb(0, 101, 145)', contrastText: 'rgb(255, 255, 255)'},
        secondary: {main: 'rgb(79, 96, 110)', contrastText: 'rgb(255, 255, 255)'},
        error: {main: 'rgb(186, 26, 26)', contrastText: 'rgb(255, 255, 255)'},
        info: {main: 'rgb(0, 101, 145)'},
        background: {default: 'rgb(252, 252, 255)', paper: 'rgb(239, 244, 250)'},
        text: {primary: 'rgb(25, 28, 30)', secondary: 'rgb(65, 71, 77)'},
        divider: 'rgb(193, 199, 206)',
      },
    },
    dark: {
      palette: {
        primary: {main: 'rgb(137, 206, 255)', contrastText: 'rgb(0, 52, 77)'},
        secondary: {main: 'rgb(183, 201, 217)', contrastText: 'rgb(33, 50, 63)'},
        error: {main: 'rgb(255, 180, 171)', contrastText: 'rgb(105, 0, 5)'},
        info: {main: 'rgb(137, 206, 255)'},
        background: {default: 'rgb(25, 28, 30)', paper: 'rgb(31, 37, 41)'},
        text: {primary: 'rgb(255, 255, 255)', secondary: 'rgb(226, 226, 229)'},
        divider: 'rgb(65, 71, 77)',
      },
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    button: {textTransform: 'none', fontWeight: 600},
  },
  shape: {borderRadius: 10},
  components: {
    MuiCard: {styleOverrides: {root: {borderRadius: 22}}},
    MuiButton: {
      defaultProps: {disableElevation: true},
      styleOverrides: {
        root: ({theme}) => ({
          minHeight: 48,
          borderRadius: 24,
          paddingInline: 24,
          variants: [
            {
              props: {variant: 'text'},
              style: {
                color: theme.vars?.palette.text.primary,
                '&:hover': {backgroundColor: theme.vars?.palette.action.hover},
              },
            },
          ],
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({theme}) => ({
          color: theme.vars?.palette.text.primary,
          textDecorationColor: 'currentColor',
        }),
      },
    },
  },
});
