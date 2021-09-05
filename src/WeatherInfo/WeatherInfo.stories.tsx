import React, { useState } from 'react'
import WeatherInfo, { Temperature, WeatherCard } from './WeatherInfo'

import '../Skur.css'
import { useWeatherInfoMock } from './useWeatherInfoMock'

export default {
  title: 'Skur/Components/Weather Info',
}

export function Simple() {
  return <WeatherInfo {...useWeatherInfoMock(59.9119, 10.7335)} />
}

export function WeatherCardSimple() {
  return (
    <WeatherCard
      units={{
        air_pressure_at_sea_level: 'hPa',
        air_temperature: 'celsius',
        cloud_area_fraction: '%',
        precipitation_amount: 'mm',
        relative_humidity: '%',
        wind_from_direction: 'degrees',
        wind_speed: 'm/s',
      }}
      timePoint={{
        time: '2021-09-05T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1021.6,
              air_temperature: 18.0,
              cloud_area_fraction: 17.2,
              relative_humidity: 36.9,
              wind_from_direction: 193.0,
              wind_speed: 2.6,
            },
          },
        },
      }}
    />
  )
}

export function TemperatureExample() {
  return <Temperature value={18.2} unit="celsius" />
}
