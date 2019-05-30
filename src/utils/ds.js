import styled from '@emotion/styled'
import facepaint from 'facepaint'
import tinycolor from 'tinycolor2'

const breakpoints = [
  420,
  1920
]

const gridSizes = [
  8,
  12
]

const colWidths = [
  28,
  64
]

const gutters = [
  12,
  34
]

const rowWidths = () => {
  return breakpoints
    .map((bp, i) => `${((gridSizes[i] * (colWidths[i] + gutters[i])))}px`)
}

export const mq = facepaint(
  breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`)
)

export const Container = styled.div(props => mq({
  maxWidth: rowWidths(),
  margin: '0 auto',
  height: props.fullHeight && '100%'
}))

export const Row = styled.div(props => mq({
  marginLeft: gutters.map(gutter => `-${gutter / 2}px`),
  marginRight: gutters.map(gutter => `-${gutter / 2}px`),
  display: 'flex',
  flex: '0 1 auto',
  height: 'inherit',
  flexWrap: props.flexWrap && 'wrap'
}))

export const Column = styled.div(props => mq({
  display: 'flex',
  flexShrink: 0,
  flexGrow: !props.colSpan && 1,
  maxWidth: !props.colSpan && '100%',
  width: props.colSpan ? props.colSpan.map(col => `${col * 100}%`) : 0,
  flexBasis: props.colSpan && props.colSpan.map(col => `${col * 100}%`),
  paddingLeft: gutters.map(gutter => `${gutter / 2}px`),
  paddingRight: gutters.map(gutter => `${gutter / 2}px`),
  flexDirection: 'column'
}))

const generateColorGroup = color => ({
  base: color,
  shade: tinycolor(color).darken().toString(),
  bright: tinycolor(color).brighten().toString(),
  brightest: tinycolor(color).setAlpha(0.3).toString()
})

const defaultValues = {
  spacing: {
    base: 8
  },
  colors: {
    primary: generateColorGroup('#08D0A2'),
    danger: generateColorGroup('#F63C53'),
    success: generateColorGroup('#42CD95'),
    info: generateColorGroup('#56CCF2'),
    disabled: {
      base: '#d9d9d9',
      text: '#464646'
    },
    text: {
      base: '#737689',
      alpha: 'rgba(0, 0, 0, 0.65)'
    },
    background: '#F6F7FB',
    foreground: '#F3F5F8'
  }
}

class DesignSystem {
  constructor (values = {}) {
    const newValues = {
      ...values,
      ...defaultValues
    }
    Object.assign(this, newValues)
  }

  getSpacing = (times = 1) => `${this.spacing.base * times}px`
  getColor = (key) => this.colors[key]
}

const instance = new DesignSystem()
Object.freeze(instance)

export default instance
