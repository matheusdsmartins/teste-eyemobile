import React from 'react'
import { withTheme } from 'emotion-theming'

import Navbar from '../Navbar'

const AppTemplate = ({
  children,
  theme
}) => (
  <div
    style={{
      minHeight: '100%',
      display: 'flex'
    }}
  >
    <Navbar />
    <div
      style={{
        flex: 1,
        backgroundColor: theme.getColor('background'),
        maxWidth: '100%'
      }}
    >
      {children}
    </div>
  </div>
)

export default withTheme(AppTemplate)
