import styled from '@emotion/styled'

import { mq } from '../../utils/ds'

export const ItemContainer = styled('div')(mq({
  display: 'flex',
  marginLeft: [16, 46]
}))

export const Item = styled.span`
  position: relative;
  line-height: 1;
  &:not(:last-child) {
    padding-right: 32px;
    margin-right: 32px;
    &:after {
      position: absolute;
      content: '';
      top: -1px;
      height: calc(100% + 2px);
      right: -1px;
      border-right: 1px solid #737689;
    }
  }
`

export const Link = styled.a`
  font-size: 13px;
  cursor: pointer;
  color: ${({ theme }) => theme.getColor('text').base};
  text-transform: uppercase;
  font-weight: 900;
`
