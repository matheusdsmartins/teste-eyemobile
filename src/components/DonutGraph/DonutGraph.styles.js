import styled from '@emotion/styled'

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
    display: ${({ onlyText }) => onlyText ? 'none' : 'block'};
    margin-right: ${({ theme }) => theme.getSpacing(1)};
  }

  .dataitem-value {
    font-family: 'Avenir Black', sans-serif;
    font-size: 12px;
    margin-left: auto;
  }
`
