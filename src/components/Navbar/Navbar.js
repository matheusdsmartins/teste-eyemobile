import React from 'react'

import { ReactComponent as Logo } from '../../assets/ic_logo.svg'
import { ReactComponent as DashboardIcon } from '../../assets/ic_dashboard.svg'
import { ReactComponent as SignUpIcon } from '../../assets/ic_cadastro.svg'

import {
  Wrapper,
  Menu,
  MenuItem
} from './Navbar.styles'

const Navbar = (
  props
) => {
  return (
    <Wrapper>
      <Menu>
        <MenuItem
          noHover
          iconColor='#FFF'
        >
          <Logo />
        </MenuItem>
        <MenuItem
          isActive
        >
          <DashboardIcon />
          Meu Faturamento
        </MenuItem>
        <MenuItem>
          <SignUpIcon />
          Cadastro
        </MenuItem>
      </Menu>
    </Wrapper>
  )
}

export default Navbar
