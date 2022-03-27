import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { onFilter } from '../../redux/action/action'
import './TopFilter.scss'

const TopFilter = ({ filterButtons, onFilter, activeFilter }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === activeFilter
    const classNames = isActive ? 'selected' : ''

    return (
      <li key={name} className={classNames}>
        <button key={name} onClick={() => onFilter(name)}>
          {label}
        </button>
      </li>
    )
  })

  return (
    <div className="top-filter">
      <ul>{buttons}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filterButtons: state.filterButtons,
    activeFilter: state.activeFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: bindActionCreators(onFilter, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopFilter)
