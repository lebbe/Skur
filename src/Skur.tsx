import React from 'react'
import PickPlace, {
  PickPlaceProps,
  useLatLong,
  usePickPlace,
} from './PickPlace/PickPlace'
import WeatherInfo, {
  useWeatherInfo,
  WeatherInfoProps,
} from './WeatherInfo/WeatherInfo'

export function useSkur() {
  const { lat, long, setLatLong } = useLatLong()
  return {
    pickPlace: usePickPlace(setLatLong),
    weatherInfo: useWeatherInfo(lat, long),
  }
}

type SkurProps = {
  pickPlace: PickPlaceProps
  weatherInfo: WeatherInfoProps
}

export default function Skur({ pickPlace, weatherInfo }: SkurProps) {
  return (
    <>
      <PickPlace {...pickPlace}></PickPlace>

      <WeatherInfo {...weatherInfo} />
    </>
  )
}
