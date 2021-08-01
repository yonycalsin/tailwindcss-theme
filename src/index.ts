import colors from './colors'
import spacing from './spacing'

const customTheme = {
  darkMode: 'class',
  theme: {
    colors,
    spacing: {
      ...spacing,
      0.5: '4px',
      1.5: '12px',
    },
  },
  corePlugins: {
    float: false,
  },
}

module.exports = customTheme

export default customTheme
