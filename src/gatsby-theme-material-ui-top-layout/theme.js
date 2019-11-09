import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { cyan, lightGreen } from '@material-ui/core/colors'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[300],
    },
    secondary: {
      main: lightGreen[300],
    },
    type: 'dark',
  },
})

theme = responsiveFontSizes(theme)

export default theme
