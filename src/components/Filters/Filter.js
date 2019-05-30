import React from 'react'

import {
  FilterItem
} from './Filters.styles'

const Filter = ({
  children,
  isActive,
  onClick
}) => {
  return (
    <FilterItem
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </FilterItem>
  )
}

export default Filter
