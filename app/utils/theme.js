import { css } from 'styled-components'

import { baseColors, colors } from './colors'

export const HEADER_FONT = 'soleil'
export const BODY_FONT = 'Open Sans'

const theme = {
  global: {
    colors,
    drop: {
      background: colors.background,
      extend: `box-shadow: 0px 4px 4px ${colors['dark-1']}; font-weight: bold`,
    },
    font: {
      family: BODY_FONT,
      size: 14,
    },
    input: {
      weight: 700,
    },
  },
  anchor: {
    color: 'control',
  },
  button: {
    border: {
      radius: '4px',
    },
  },
  layer: {
    background: colors.background,
    overlay: {
      background: 'rgba(48, 48, 48, 0.5)',
    },
  },
  select: {
    background: colors.background,
    control: {
      extend: 'border-radius: 4px; border: 1px solid #4e504c',
    },
  },
  tabs: {
    gap: 'medium',
  },
  tab: {
    active: {
      color: 'white',
    },
    color: colors['light-5'],
    border: {
      side: 'bottom',
      size: 'small',
      color: {
        dark: colors['dark-1'],
        light: baseColors.transparent,
      },
      active: {
        color: {
          dark: baseColors.primary,
          light: baseColors.primary,
        },
      },
      hover: {
        color: {
          dark: colors.brand,
          light: colors.brand,
        },
      },
    },
    extend: () => css`
      font-weight: bold;
    `,
  },
  table: {
    header: 'none',
    body: {
      pad: 'none',
    },
  },
}

export default theme
