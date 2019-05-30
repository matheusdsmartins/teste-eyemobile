import styled from '@emotion/styled'

import { mq } from '../../utils/ds'

export const Wrapper = styled('div')(({ theme }) => mq({
  display: ['none', 'block'],
  width: '110px',
  backgroundColor: theme.getColor('primary').base,
  borderTop: '1px solid #979797',
  borderLeft: '1px solid #979797'
}))

export const Menu = styled.div``

export const MenuItem = styled.a`
  display: flex;
  padding: 20px;
  color: ${({ isActive }) => isActive ? '#FFF' : '#059C7B'};
  text-align: center;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 0.2s ease;
  justify-content: center;
  align-items: center;
  img, svg {
    margin-bottom: ${({ theme }) => theme.getSpacing(1)}
  }
  svg path {
    fill: ${({ isActive, iconColor }) => iconColor || isActive ? '#FFF' : '#059C7B'};
  }
  &:hover {
    background-color: ${({ theme, noHover }) => !noHover && theme.getColor('primary').bright}
  }
`
