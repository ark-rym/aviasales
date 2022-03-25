import { GET_ID, GET_TICKETS, CHECKED, PAGE_SIZE, FILTER } from '../action/action-type'

const initialState = {
  id: '',
  tickets: {
    data: [],
    stop: true,
  },
  sidePanelCheckbox: [
    { name: 'all', label: 'Все', checked: false },
    { name: 'direct', label: 'Без пересадок', checked: true, value: 0 },
    { name: 'oneTransfer', label: '1 пересадка', checked: true, value: 1 },
    { name: 'twoTransfers', label: '2 пересадки', checked: true, value: 2 },
    { name: 'threeTransfers', label: '3 пересадки', checked: false, value: 3 },
  ],
  filterButtons: [
    { name: 'theCheapest', label: 'Самый дешевый' },
    { name: 'theFastest ', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ],
  activeFilter: 'theCheapest',
  itemsOnPage: 5,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID:
      return {
        ...state,
        id: action.payloadId,
      }
    case GET_TICKETS:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          data: [...state.tickets.data, ...action.payloadData.tickets],
          stop: action.payloadData.stop,
        },
      }
    case CHECKED:
      if (action.payloadCheck === 'all') {
        return {
          ...state,
          sidePanelCheckbox: state.sidePanelCheckbox.map((el) => ({
            ...el,
            checked: !state.sidePanelCheckbox[0].checked,
          })),
        }
      } else {
        const newState = {
          ...state,
          sidePanelCheckbox: state.sidePanelCheckbox.map((el) =>
            action.payloadCheck === el.name ? { ...el, checked: !el.checked } : el
          ),
        }
        newState.sidePanelCheckbox[0].checked = newState.sidePanelCheckbox.slice(1).every((el) => el.checked)
        return newState
      }
    case PAGE_SIZE:
      return {
        ...state,
        itemsOnPage: state.itemsOnPage + 5,
      }
    case FILTER:
      return {
        ...state,
        activeFilter: action.payloadFilter,
      }
    default:
      return state
  }
}

export default rootReducer
