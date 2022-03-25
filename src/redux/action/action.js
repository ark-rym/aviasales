import { GET_ID, GET_TICKETS, CHECKED, PAGE_SIZE, FILTER } from './action-type'

export const inc = () => ({ type: 'INC' })

export const getId = () => (dispatch) => {
  fetch('https://front-test.beta.aviasales.ru/search')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Произошла ошибка, код ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      dispatch({
        type: GET_ID,
        payloadId: data.searchId,
      })
    })
}

export const getTickets = (id) => (dispatch) => {
  fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Произошла ошибка, код ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      dispatch({
        type: GET_TICKETS,
        payloadData: data,
      })
    })
}

export const onChecked = (value) => ({
  type: CHECKED,
  payloadCheck: value,
})

export const onPage = () => ({
  type: PAGE_SIZE,
  payloadPage: 5,
})

export const onFilter = (value) => ({
  type: FILTER,
  payloadFilter: value,
})
