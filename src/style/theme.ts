import { defaultTheme } from '@xstyled/styled-components'
import { darken, lighten } from 'polished'

export const theme = {
  ...defaultTheme,
  colors: {
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    white: '#fff',
    gray: '#6c757d',
    grayLighten: lighten(0.375, '#6c757d'),
    grayDark: '#343a40',
    primary: '#0d6efd',
    primaryDarken: darken(0.05, '#0d6efd'),
    secondary: '#6c757d',
    secondaryDarken: darken(0.05, '#6c757d'),
    success: '#198754',
    info: '#0dcaf0',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#212529',
  },
}