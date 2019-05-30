import React from 'react'
import PieChart from 'react-minimal-pie-chart'

import {
  formatBRL
} from '../../utils/formatters'

import {
  DataItem
} from './DonutGraph.styles'

const DonutGraph = ({
  data
}) => {
  const totalItem = data
    .reduce((curr, acc) => {
      return {
        total: acc.total + curr.total,
        value: acc.value + curr.value
      }
    }, { total: 0, value: 0 })
  return (
    <div
      style={{
        width: 270,
        margin: '0 auto'
      }}
    >
      <div
        style={{
          width: 135,
          margin: '0 auto',
          transform: 'rotate(-87deg)'
        }}
      >
        <PieChart
          data={data}
          lineWidth={30}
          paddingAngle={3}
        />
      </div>
      <div
        style={{
          marginTop: 26
        }}
      >
        {data.map((item, i) => (
          <DataItem
            key={`data-label-${i}`}
            color={item.color}
          >
            {item.label}
            <span
              className='dataitem-value'
            >
              {formatBRL(item.total)} ({item.value}%)
            </span>
          </DataItem>
        ))}
        <DataItem
          onlyText
        >
          <span
            style={{
              fontFamily: 'Avenir Black'
            }}
          >
            Total
          </span>
          <span
            className='dataitem-value'
          >
            {formatBRL(totalItem.total)} ({totalItem.value}%)
          </span>
        </DataItem>
      </div>
    </div>
  )
}

export default DonutGraph
