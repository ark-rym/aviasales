import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getTickets } from '../../redux/action/action'
import { dataMap, dataSort, filterCheckboxes } from '../../subsidiary/subs'
import Ticket from '../ticket'
import './ticket-list.scss'

const TicketList = ({ fetchData, state }) => {
  const { id, tickets, itemsOnPage, activeFilter, sidePanelCheckbox } = state

  if (id) {
    useEffect(() => {
      fetchData(id)
    }, [])
  }

  let KEY = 0

  const DataList = dataMap(dataSort(filterCheckboxes(tickets.data, sidePanelCheckbox), activeFilter), itemsOnPage).map(
    (item) => {
      KEY++
      return (
        <li key={KEY}>
          <Ticket id={KEY} data={item} />
        </li>
      )
    }
  )

  return <ul className="ticket-list">{DataList}</ul>
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(getTickets, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
