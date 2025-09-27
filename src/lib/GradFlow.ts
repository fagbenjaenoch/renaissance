export type RGB = {
  r: number
  g: number
  b: number
}

export type GradientConfig = {
  color1: RGB
  color2: RGB
  color3: RGB
  speed: number
  scale: number
  type: GradientType
  noise: number
}

export type GradientType =
  | 'linear'
  | 'animated'
  | 'conic'
  | 'wave'
  | 'silk'
  | 'smoke'
  | 'stripe'

export type GradFlowProps = {
  config?: Partial<GradientConfig>
  className?: string
}

export const DEFAULT_CONFIG: GradientConfig = {
  color1: { r: 226, g: 98, b: 75 },
  color2: { r: 255, g: 255, b: 255 },
  color3: { r: 30, g: 34, b: 159 },
  speed: 0.4,
  scale: 1,
  type: 'stripe',
  noise: 0.08,
}

export const normalizeRgb = (rgb: RGB): [number, number, number] => [
  rgb.r / 255,
  rgb.g / 255,
  rgb.b / 255,
]

export const gradientTypeNumber = {
  linear: 0,
  conic: 1,
  animated: 2,
  wave: 3,
  silk: 4,
  smoke: 5,
  stripe: 6,
}