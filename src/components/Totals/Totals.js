import React, { Component, useState } from 'react'
import CountUp from 'react-countup'
import { connect } from 'react-redux'

import { mapEarnings } from '../../store/modules/earnings'

import DonutGraph from '../DonutGraph/DonutGraph'
import BarGraph from '../BarGraph'

import { ReactComponent as TotalsIcon } from '../../assets/ic_totais.svg'
import { ReactComponent as CustomersIcon } from '../../assets/ic_clientes.svg'

import {
  Container,
  TotalSelector,
  Content,
  Main,
  Section,
  SectionGroup,
  TotalCounter,
  MoneySign,
  Selectors,
  totalSection
} from './Totals.styles'

const withEarnings = WrappedComponent => {
  const mapStateToProps = mapEarnings

  class EarningsHOC extends Component {
    render () {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }

  return connect(mapStateToProps)(EarningsHOC)
}

const Totals = ({
  totalIncome,
  totalSpent,
  total,
  incomeByService
}) => {
  const [currentTotal, setCurrentTotal] = useState('all')

  return (
    <Container>
      <Selectors>
        <TotalSelector
          isActive={currentTotal === 'all'}
          onClick={() => setCurrentTotal('all')}
        >
          <TotalsIcon />
          Totais
        </TotalSelector>
        <TotalSelector
          isActive={currentTotal === 'customers'}
          onClick={() => setCurrentTotal('customers')}
        >
          <CustomersIcon />
          Clientes
        </TotalSelector>
      </Selectors>
      <Main>
        <Content>
          <Section
            css={totalSection}
          >
            <h2>Valor Total</h2>
            <TotalCounter>
              <MoneySign>R$</MoneySign>
              <CountUp
                className='total-value'
                start={0}
                end={total}
                duration={2.75}
                separator='.'
                decimals={2}
                decimal=','
              />
            </TotalCounter>
          </Section>
          <SectionGroup>
            <Section>
              <h2>Serviços</h2>
              <DonutGraph
                data={incomeByService}
              />
            </Section>
            <Section>
              <h2>Despesas X Receitas</h2>
              <BarGraph
                data={[
                  { label: 'Receitas', value: totalIncome, color: '#00DDAA', percentage: 50 },
                  { label: 'Despesas', value: totalSpent, color: '#FD5064', percentage: 30 }
                ]}
                step={2000}
                containerStyle={{
                  margin: '0 auto'
                }}
              />
            </Section>
          </SectionGroup>
        </Content>
      </Main>
    </Container>
  )
}

export default withEarnings(Totals)
