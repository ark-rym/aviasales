import { format } from 'date-fns'

export const makeNumberToPrice = (price) => {
  const newPrice = price
    .toString()
    .split('')
    .reverse()
    .map((el, index) => {
      if (index % 3 !== 2) {
        return el
      } else {
        return ' ' + el
      }
    })
    .reverse()
    .join('')
  return newPrice
}

export const makeWordsEnding = (arr) => {
  if (arr.length === 0) return 'ПРЯМОЙ'
  if (arr.length === 1) return 'ПЕРЕСАДКА'
  if (arr.length >= 2 && arr.length < 5) return 'ПЕРЕСАДКИ'
  if (arr.length >= 5) return 'ПЕРЕСАДОК'
  return 'ПЕРЕСАДКА'
}

export const makeTimeFromMins = (mins) => {
  const h = Math.floor(mins / 60)
  const min = mins % 60
  return `${h}ч  ${min < 5 ? `0${min}` : min}м`
}

export const departureFormat = (date) => format(new Date(date), 'HH:mm')

export const arrivalFormat = (date, duration) =>
  format(new Date(new Date(date).getTime() + duration * 1000 * 60), 'HH:mm')

export const transfersFormat = (arr) => {
  if (arr.length !== 0) {
    return arr.length
  } else {
    return ''
  }
}

export const transfers = (arr) => {
  if (!arr.length) return ' - '
  return arr.join(' - ')
}

export const filterCheckboxes = (data, arr) => {
  const checked = arr.filter((transfer) => transfer.checked)
  const all = checked.some((transfer) => transfer.name === 'all')
  if (all) {
    return data
  }

  return data.filter((ticket) => {
    const stops = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    return checked.some((check) => stops === check.value)
  })
}

export const dataSort = (data, activeFilter) => {
  if (activeFilter === 'theCheapest') {
    return data.sort((previous, next) => previous.price - next.price)
  }
  if (activeFilter === 'theFastest') {
    return data.sort(
      (previous, next) =>
        previous.segments[0].duration +
        previous.segments[1].duration -
        (next.segments[0].duration + next.segments[1].duration)
    )
  }

  if (activeFilter === 'optimal') {
    return data.sort(
      (previous, next) =>
        previous.price +
        previous.segments[0].duration +
        previous.segments[1].duration -
        (next.price + next.segments[0].duration + next.segments[1].duration)
    )
  }

  return data
}

export const dataMap = (data, pageSize) =>
  data.slice(0, pageSize).map((element) => ({
    price: element.price,
    carrier: element.carrier,
    departure: [element.segments[0].origin, element.segments[0].destination],
    departureTime: element.segments[0].date,
    departureDuration: element.segments[0].duration,
    departureTransfers: element.segments[0].stops,
    arrival: [element.segments[1].origin, element.segments[1].destination],
    arrivalTime: element.segments[1].date,
    arrivalDuration: element.segments[1].duration,
    arrivalTransfers: element.segments[1].stops,
  }))
