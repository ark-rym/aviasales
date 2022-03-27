import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Spin, Alert } from 'antd'

import { Header } from '../Header'
import { SidePanel } from '../SidePanel'
import { TopFilter } from '../TopFilter'
import { TicketList } from '../TicketList'
import { getId, onPage } from '../../redux/action/action'

import './App.scss'

const App = ({ getId, onPage, tickets, sidePanelCheckbox }) => {
  useEffect(() => {
    getId()
  }, [])

  const loading = <Spin size="large" tip="Идет загрузка билетов" className="spin" />
  const warning = (
    <Alert className="alert" message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" />
  )
  const hasData = !tickets.stop ? null : loading

  const n = sidePanelCheckbox.filter((el) => el.checked).length
  const checkboxWarning = n === 0 && !hasData ? warning : null

  return (
    <div className="App">
      <Header />
      <main className="main">
        <SidePanel />
        <div className="tickets">
          <TopFilter />
          {hasData}
          {checkboxWarning}
          <TicketList />
          <button className="load-more" onClick={() => onPage()}>
            Показать еще 5 билетов!
          </button>
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    sidePanelCheckbox: state.sidePanelCheckbox,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getId: bindActionCreators(getId, dispatch),
    onPage: bindActionCreators(onPage, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
