import { lighten, darken } from 'polished'

/**
 * Takes an array of colors and adds them to the colors object with numbered prefixes
 *
 * Example Input:
 * const colors = {}
 * const demoColors = ['#000', '#333', '#666']
 *
 * Example Output:
 * colorArray(demoColors, 'demo')
 * -> { 'demo-1': '#000', 'demo-2': '#333', 'demo-3': '#666', } // colors
 */
const colorArray = (array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color
  })

export const baseColors = {
  red: 'rgb(230,34,45)',
  pink: 'rgb(221,17,117)',
  orange: 'rgb(245,186,23)',
  yellow: 'rgb(242,233,0)',
  green: 'rgb(112, 189, 70)',
  blue: 'rgb(24,192,221)',
  purple: 'rgb(65,86,166)',
  darkGrey: 'rgb(68,68,68)',
  mediumGrey: 'rgb(170,170,170)',
  lightGrey: 'rgb(238,238,238)',
  white: 'rgb(255,255,255)',
  transparent: '#00000000',
}

/*
 * Add helper colors to allow for more flexible styling
 * Primary will map to Grommet's `brand`
 * Secondary will map to Grommet's `focus`
 */
baseColors.primary = baseColors.blue
baseColors.secondary = baseColors.purple
baseColors.primaryText = baseColors.darkGrey
baseColors.background = baseColors.white

/**
 * Dark and light colors are based on the primaryText and lightGrey colors, respectively.
 * This allows us to swap out a dark theme and light theme while still being able to use
 * theme colors such as `dark-2` or `light-4`.
 */
const darkColors = [
  darken(0.07, baseColors.primaryText),
  darken(0.05, baseColors.primaryText),
  darken(0.025, baseColors.primaryText),
  baseColors.primaryText,
  lighten(0.025, baseColors.primaryText),
  lighten(0.05, baseColors.primaryText),
]
const lightColors = [
  lighten(0.02, baseColors.lightGrey),
  baseColors.lightGrey,
  darken(0.2, baseColors.lightGrey),
  darken(0.3, baseColors.lightGrey),
  darken(0.4, baseColors.lightGrey),
  darken(0.5, baseColors.lightGrey),
]

/** @todo customize these to match theme colors! */
const accentColors = [baseColors.pink, baseColors.green, '#60EBE1', '#FFCA58']
const neutralColors = [
  lighten(0.2, baseColors.pink),
  lighten(0.2, baseColors.green),
  '#6095EB',
  '#FFB200',
]
const statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: baseColors.yellow,
  ok: baseColors.green,
  unknown: baseColors.mediumGrey,
  disabled: baseColors.mediumGrey,
}

/*
 * Base theme colors, passed directly as theme colors
 * The keys used here should be found in;
 * https://github.com/grommet/grommet/blob/b70077fe02311aaf5e6b1a9f256077982daf9249/src/js/themes/base.js#L53
 */
export const colors = {
  active: baseColors.mediumGrey,
  background: baseColors.background,
  brand: baseColors.primary,
  control: {
    dark: baseColors.primary,
    light: baseColors.secondary,
  },
  focus: baseColors.secondary,
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  placeholder: '#AAAAAA',
  text: {
    dark: '#eeeeee',
    light: '#444444',
  },
  white: '#FFFFFF',
}
// Add custom color array to colors
colorArray(accentColors, 'accent')
colorArray(neutralColors, 'neutral')
colorArray(darkColors, 'dark')
colorArray(lightColors, 'light')
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color]
})

export default colors /** @todo replace with named import for files that use this */
