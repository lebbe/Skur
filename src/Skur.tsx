import React from 'react'
import PickPlace, { useLatLong, usePickPlace } from './PickPlace/PickPlace'
import WeatherInfo, { useWeatherInfo } from './WeatherInfo/WeatherInfo'

export default function Skur() {
  const { lat, long, setLatLong } = useLatLong()

  return (
    <>
      <PickPlace {...usePickPlace(setLatLong)}></PickPlace>

      <WeatherInfo {...useWeatherInfo(lat, long)} />
    </>
  )
}
