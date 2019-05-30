import styled from '@emotion/styled'
import tinycolor from 'tinycolor2'

import { mq } from '../../utils/ds'

export const Wrapper = styled('div')(mq({
  whiteSpace: 'nowrap',
  overflowX: ['scroll', 'initial'],
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}))

export const FilterItem = styled.a`
  min-width: 80px;
  font-size: 16px;
  line-height: 1;
  display: inline-block;
  text-align: center;
  font-family: 'DIN Condensed', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 20px;
  color: #FFF;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({ theme, isActive }) => isActive ? theme.getColor('primary').base : tinycolor(theme.getColor('primary').base).setAlpha(0.5).toRgbString()};
  &:not(:last-child) {
    margin-right: 12px;
  }
`
