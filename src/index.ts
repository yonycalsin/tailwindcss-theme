import colors from './colors'
import spacing from './spacing'

export default {
  darkMode: 'class',
  theme: {
    colors,
    spacing: {
      ...spacing,
      0.5: '4px',
      1.5: '12px',
    },
  },
}
