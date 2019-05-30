import styled from '@emotion/styled'

export const Step = styled.div`
  border-bottom: 2px solid #DFE4E8;
  position: relative;
`

export const StepLabel = styled.span`
  position: absolute;
  right: calc(100% + 14px);
  bottom: -6px;
  font-size: 10px;
  color: #545454;
`

export const DataItem = styled.p`
  display: flex;
  color: #4A4A4A;
  font-size: 10px;
  font-family: 'Avenir Roman', sans-serif;
  text-transform: uppercase;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background-color: ${({ color }) => color || '#000'};
    display: block;
    margin-right: ${({ theme }) => theme.getSpacing(1)};
  }

  .dataitem-value {
    font-family: 'Avenir Black', sans-serif;
    font-size: 12px;
    margin-left: auto;
  }
`

export const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`

export const Bar = styled.div`
  background-color: ${({ color }) => color || '#737588'};
  height: ${({ height }) => height ? `${height}px` : 0};
  width: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  &:not(:last-child) {
    margin-right: 44px;
  }
`
