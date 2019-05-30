import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  formatBRL
} from '../../utils/formatters'

import {
  Step,
  StepLabel,
  DataItem,
  BarContainer,
  Bar
} from './BarGraph.styles'

const withDataset = WrappedComponent => {
  class DataHOC extends Component {
    render () {
      const {
        data,
        ...rest
      } = this.props

      return (
        <WrappedComponent
          dataset={this.generateDataset()}
          {...rest}
        />
      )
    }

    generateDataset = () => {
      const {
        data,
        step
      } = this.props

      const values = data.map(item => item.value)
      const max = Math.max(...values)
      const steps = Array(Math.floor(max / step))
        .fill(0)
        .map((item, i) => ({ value: step * (i + 1), label: formatBRL(step * (i + 1)) }))
        .reverse()

      return {
        max,
        steps,
        data
      }
    }
  }

  DataHOC.defaultProps = {
    step: 100
  }

  DataHOC.propTypes = {
    step: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        color: PropTypes.string
      })
    )
  }

  return DataHOC
}

const LineGraph = ({
  dataset: {
    steps,
    data
  },
  step,
  width,
  height,
  containerStyle
}) => {
  return (
    <div
      style={{
        width,
        ...containerStyle
      }}
    >
      <div
        style={{
          width: width - 70,
          marginLeft: 70,
          position: 'relative'
        }}
      >
        {steps.map(step => (
          <Step
            key={step.label}
            style={{
              height: `${height / steps.length + 2}px`
            }}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
        <BarContainer>
          {data.map((item, i) => {
            const stepHeight = height / steps.length + 2
            const pixelPerStep = stepHeight / step
            const barHeight = (item.value - 2000) * pixelPerStep
            return (
              <Bar
                key={`bar-${i}`}
                color={item.color}
                height={barHeight}
              />
            )
          })}
        </BarContainer>
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
              {formatBRL(item.value)} ({item.percentage}%)
            </span>
          </DataItem>
        ))}
      </div>
    </div>
  )
}

LineGraph.defaultProps = {
  width: 275,
  height: 190
}

export default withDataset(LineGraph)
