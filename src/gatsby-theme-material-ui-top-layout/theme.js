import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#36eee0',
      dark: '#00bbae',
      light: '#7cffff',
      contrastText: '#000',
    },
    secondary: {
      main: '#bcece0',
      dark: '#8bbaae',
      light: '#efffff',
      contrastText: '#000',
    },
    type: 'dark',
  },
})

export default theme
