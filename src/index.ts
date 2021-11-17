import colors from './colors'
import spacing from './spacing'
import fontWeight from './font-weight'
import fontSize from './font-size'
import borderRadius from './border-radius'

const customTheme = {
  darkMode: 'class',
  theme: {
    colors,
    spacing: {
      ...spacing,
      0.5: '4px',
      1.5: '12px',
    },
    fontWeight,
    fontSize,
    borderRadius,
  },
  corePlugins: {
    float: false,
  },
}

module.exports = customTheme

export default customTheme
