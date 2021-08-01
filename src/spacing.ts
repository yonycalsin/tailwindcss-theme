const spacingSize = 8

export const getSpacing = (count = 50) =>
  Array.from({ length: count + 1 }).map((_, index) => `${index * spacingSize}px`)

const spacing = getSpacing(spacingSize)

export default spacing
