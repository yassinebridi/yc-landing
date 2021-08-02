import React, { useState, useRef, useEffect } from "react"

const CountDown = () => {
  const [countDays, setCountDays] = useState("00")
  const [countHours, setCountHours] = useState("00")
  const [countMinutes, setCountMinutes] = useState("00")
  const [countSeconds, setCountSeconds] = useState("00")

  let interval = useRef()
  const startTimer = ({yearTrget,monthTrget,dayTrget}) => {
    const countdowndate = new Date(`${yearTrget},${monthTrget},${dayTrget},  00:00:00`).getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdowndate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        //update Timer
        setCountDays(days)
        setCountHours(hours)
        setCountMinutes(minutes)
        setCountSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    let intervalClean = interval.current;
    startTimer({yearTrget:"2021",monthTrget:"08",dayTrget:"31"})
    return () => {
      clearInterval(intervalClean)
    }
  })
  return (
    <div className="countdown-item-area d-flex">
      <div className="coutn-item">
        <h6>Days</h6>
        <div className="counter-number">
          <h1>
            <span id="days">{countDays}</span>
          </h1>
        </div>
      </div>
      <div className="coutn-item">
        <h6>Hours</h6>
        <div className="counter-number">
          <h1>
            <span id="hours">{countHours}</span>
          </h1>
        </div>
      </div>
      <div className="coutn-item">
        <h6>Minutes</h6>
        <div className="counter-number">
          <h1>
            <span id="minutes">{countMinutes}</span>
          </h1>
        </div>
      </div>
      <div className="coutn-item">
        <h6>Seconds</h6>
        <div className="counter-number">
          <h1>
            <span id="seconds">{countSeconds}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CountDown
