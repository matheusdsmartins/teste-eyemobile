import React from 'react'

import Breadcrumbs from '../Breadcrumbs'
import MobileMenu from '../MobileMenu'

import { Wrapper } from './TopNav.styles'

const TopNav = (
  props
) => {
  return (
    <Wrapper>
      <MobileMenu />
      <Breadcrumbs />
    </Wrapper>
  )
}

export default TopNav
