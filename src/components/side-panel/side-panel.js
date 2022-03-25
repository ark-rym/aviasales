import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './side-panel.scss'
import { onChecked } from '../../redux/action/action'

const SidePanel = ({ sidePanelCheckbox, onChecked }) => {
  const sideTitle = 'количество пересадок'

  const buttons = sidePanelCheckbox.map(({ name, label, checked }) => {
    return (
      <li key={name}>
        <Checkbox className="checkbox" key={name} checked={checked} onChange={() => onChecked(name)}>
          {label}
        </Checkbox>
      </li>
    )
  })

  return (
    <div className="side-panel">
      <span className="title">{sideTitle}</span>
      <ul>{buttons}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sidePanelCheckbox: state.sidePanelCheckbox,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChecked: bindActionCreators(onChecked, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
