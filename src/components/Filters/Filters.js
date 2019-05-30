import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DragScrollProvider from 'drag-scroll-provider'

import Filter from './Filter'

import {
  Wrapper
} from './Filters.styles'

const Filters = ({
  items,
  style
}) => {
  const [activeFilter, setActiveFilter] = useState(items[0].name)

  const handleClick = filterName => () => {
    setActiveFilter(filterName)
  }

  return (
    <DragScrollProvider>
      {({ onMouseDown, ref, clickItem }) => (
        <Wrapper
          style={style}
          ref={ref}
          onMouseDown={onMouseDown}
        >
          {items.map(filter => (
            <Filter
              key={filter.name}
              onClick={() => clickItem(handleClick(filter.name))}
              isActive={activeFilter === filter.name}
            >
              {filter.name}
            </Filter>
          ))}
        </Wrapper>
      )}
    </DragScrollProvider>
  )
}

Filters.propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.object
}

export default Filters
