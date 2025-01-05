export const blue = {
  light: {
    bg: '#ffffff',
    text: '#1F2328',
    muted: '#656D76',
    border: '#D0D7DE',
    accent: '#0969DA',
    canvas: '#F6F8FA',
    success: '#1a7f37',
    danger: '#cf222e',
    warning: '#9a6700',
    info: '#0969da',
    done: '#8250df',
  },
  dark: {
    bg: '#0D1117',
    text: '#C9D1D9',
    muted: '#8B949E',
    border: '#30363D',
    accent: '#58A6FF',
    canvas: '#161B22',
    success: '#3fb950',
    danger: '#f85149',
    warning: '#d29922',
    info: '#58a6ff',
    done: '#a371f7',
  }
} as const

export type ThemeColors = typeof blue.light
export type ThemeVariant = keyof typeof blue
