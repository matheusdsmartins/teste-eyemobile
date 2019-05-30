import React from 'react'
import styled from '@emotion/styled'

import { mq } from '../utils/ds'

import Filters from '../components/Filters'
import Totals from '../components/Totals'
import TopNav from '../components/TopNav'

const Content = styled('div')(mq({
  marginTop: [24, 30],
  marginLeft: [16, 40],
  marginRight: [16, 40],
  marginBottom: [32, 0]
}))

const EarningsPage = ({
  theme
}) => (
  <>
    <TopNav />
    <Content>
      <Filters
        items={[
          { name: 'Hoje' },
          { name: 'Última Semana' },
          { name: 'Último Mês' },
          { name: 'Outro Período' }
        ]}
        style={{
          marginBottom: 36
        }}
      />
      <Totals />
    </Content>
  </>
)

export default EarningsPage
