import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { mq } from '../../utils/ds'

export const Container = styled('div')(mq({
  display: 'flex',
  flexDirection: ['column', 'row']
}))

export const Selectors = styled('div')(mq({
  display: 'flex',
  flexDirection: ['row', 'column'],
  marginBottom: [56, 0]
}))

const selectorMargins = css(mq({
  marginBottom: [0, 28],
  marginRight: [28, 0]
}))

export const TotalSelector = styled.a`
  display: flex;
  color: #73758A;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 900;
  cursor: pointer;
  transition: opacity 0.2s ease;
  align-items: center;
  opacity: ${({ isActive }) => isActive ? '1' : '0.5'};
  img, svg {
    margin-right: ${({ theme }) => theme.getSpacing(1)};
  }
  &:hover {
    opacity: ${({ isActive }) => isActive && '1'};
  }
  &:not(:last-child) {
    ${selectorMargins}
  }
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 832px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SectionGroup = styled('div')(mq({
  display: 'flex',
  width: '100%',
  flexDirection: ['column', 'row']
}))

export const totalSection = css(mq({
  paddingBottom: [45, 60],
  borderBottom: '1px solid #DFE1E0',
  marginBottom: 34
}))

const groupBps = css(mq({
  flex: 1,
  '&:not(:last-child)': {
    marginBottom: [93, 0]
  }
}))

export const Section = styled.div`
  width: 100%;
  flex-basis: 100%;

  ${SectionGroup} & {
    ${groupBps};
  }

  h2 {
    text-align: center;
    font-size: 25px;
    line-height: 1;
    font-family: 'DIN Condensed', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.getColor('text').base};
    margin-bottom: 13px;
  }
`

const counterSizes = css(mq({
  fontSize: [62, 70]
}))

export const TotalCounter = styled.p`
  color: ${({ theme }) => theme.getColor('primary').base};
  ${counterSizes}
  display: flex;
  align-items: flex-start;
  justify-content: center;
  span {
    line-height: 1;
  }
  .total-value {
    position: relative;
    top: -5px;
  }
`

export const MoneySign = styled('span')(({ theme }) => mq({
  marginRight: [4, theme.getSpacing(1)],
  [`${TotalCounter} &`]: {
    fontSize: [32, 38]
  }
}))
