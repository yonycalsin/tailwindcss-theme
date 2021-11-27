import merge from 'merge'
import colors from './colors'
import spacing from './spacing'
import fontWeight from './font-weight'
import fontSize from './font-size'
import borderRadius from './border-radius'

const customDefaultTheme = {
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

function withTailwindCssTheme(options: any) {
  return merge.recursive(true, customDefaultTheme, options)
}

export { colors, spacing, fontWeight, fontSize, borderRadius, withTailwindCssTheme }
