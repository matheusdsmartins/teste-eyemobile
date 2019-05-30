import React from 'react'

import {
  ItemContainer,
  Item,
  Link
} from './Breadcrumbs.styles'

const Breadcrumbs = (
  props
) => {
  return (
    <ItemContainer>
      <Item>
        <Link>
          Petshop
        </Link>
      </Item>
      <Item>
        <Link>
          Meu Faturamento
        </Link>
      </Item>
    </ItemContainer>
  )
}

export default Breadcrumbs
