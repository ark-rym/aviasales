import React from 'react'

import {
  makeNumberToPrice,
  makeWordsEnding,
  transfers,
  arrivalFormat,
  departureFormat,
  transfersFormat,
  makeTimeFromMins,
} from '../../subsidiary/subs'

import './ticket.scss'

const Ticket = ({ data }) => {
  const {
    price,
    carrier,
    departure,
    departureTime,
    departureDuration,
    departureTransfers,
    arrival,
    arrivalTime,
    arrivalDuration,
    arrivalTransfers,
  } = data

  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-price">{makeNumberToPrice(price)} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="company logo"></img>
      </div>
      <div className="ticket-main">
        <div className="ticket-info">
          <div>
            <span>{departure.join(' - ')}</span>
            <span>
              {departureFormat(departureTime)} – {arrivalFormat(departureTime, departureDuration)}
            </span>
          </div>
          <div>
            <span>в пути</span>
            <span>{makeTimeFromMins(departureDuration)}</span>
          </div>
          <div>
            <span>{`${transfersFormat(departureTransfers)} ${makeWordsEnding(departureTransfers)}`}</span>
            <span>{transfers(departureTransfers)}</span>
          </div>
        </div>
        <div className="ticket-info">
          <div>
            <span>{arrival.join(' - ')}</span>
            <span>
              {departureFormat(arrivalTime)} – {arrivalFormat(arrivalTime, arrivalDuration)}
            </span>
          </div>
          <div>
            <span>в пути</span>
            <span>{makeTimeFromMins(arrivalDuration)}</span>
          </div>
          <div>
            <span>{`${transfersFormat(arrivalTransfers)} ${makeWordsEnding(arrivalTransfers)}`}</span>
            <span>{transfers(arrivalTransfers)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
