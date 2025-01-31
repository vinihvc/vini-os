'use client'

import { format, getDate, getMonth, getYear } from 'date-fns'
import React from 'react'

export const useDateTime = (formatDate?: '12h' | '24h') => {
  const is12h = formatDate === '12h'

  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Date
  const day = getDate(date)
  const month = getMonth(date)
  const year = getYear(date)
  const weekDay = format(date, 'EEE')
  const monthName = format(date, 'MMM')

  // Time
  const hours = format(date, is12h ? 'hh' : 'HH')
  const minutes = format(date, 'mm')

  return {
    day,
    month,
    year,
    weekDay,
    monthName,
    hours,
    minutes,
  }
}
