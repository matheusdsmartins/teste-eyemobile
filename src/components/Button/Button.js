import React from 'react'

import {
  btn
} from './Button.styles'

const Button = ({
  children,
  css,
  ...rest
}) => (
  <button
    {...rest}
    css={[btn, css]}
  >
    {children}
  </button>
)

export default Button
