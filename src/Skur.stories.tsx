import React from 'react'
import { useLatLong } from './PickPlace/PickPlace'
import { usePickPlaceMock } from './PickPlace/usePickPlaceMock'
import Skur from './Skur'
import { useWeatherInfoMock } from './WeatherInfo/useWeatherInfoMock'

export default {
  title: 'Pages/Skur',
}

export function Simple() {
  const { pickPlace, weatherInfo } = useSkurMock()
  return <Skur pickPlace={pickPlace} weatherInfo={weatherInfo} />
}

function useSkurMock() {
  const { lat, long, setLatLong } = useLatLong()
  return {
    pickPlace: usePickPlaceMock(setLatLong),
    weatherInfo: useWeatherInfoMock(lat, long),
  }
}
