import React, { useEffect, useState } from 'react'

type WeatherInfoProps = {
  timepoints: TimePoint[]
  units: Units
}

type TimePoint = {
  time: string
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number
        air_temperature: number
        cloud_area_fraction: number
        relative_humidity: number
        wind_from_direction: number
        wind_speed: number
      }
    }
  }
}

type Units = {
  air_pressure_at_sea_level: string
  air_temperature: string
  cloud_area_fraction: string
  precipitation_amount: string
  relative_humidity: string
  wind_from_direction: string
  wind_speed: string
}

type APIResult = {
  properties: {
    meta: {
      updated_at: string
      units: Units
    }
    timeseries: TimePoint[]
  }
}

export function useWeatherInfo(lat: number, long: number) {
  const [units, setUnits] = useState({
    air_pressure_at_sea_level: 'hPa',
    air_temperature: 'celsius',
    cloud_area_fraction: '%',
    precipitation_amount: 'mm',
    relative_humidity: '%',
    wind_from_direction: 'degrees',
    wind_speed: 'm/s',
  })

  const [timepoints, setTimepoints] = useState<TimePoint[]>([])

  useEffect(() => {
    async function doSearch() {
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      const json: APIResult = await response.json()

      setUnits(json.properties.meta.units)
      setTimepoints(json.properties.timeseries)
    }
    if (lat > 0 && long > 0) {
      doSearch()
    }
  }, [lat, long])

  return {
    units,
    timepoints,
  }
}

export default function WeatherInfo({ timepoints, units }: WeatherInfoProps) {
  return (
    <div>
      {timepoints.map((timepoint) => (
        <WeatherCard key={timepoint.time} units={units} timePoint={timepoint} />
      ))}
    </div>
  )
}

function DateTime({ datetime }: { datetime: string }) {
  const days = [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
  ]
  const months = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const date = new Date(datetime)
  return (
    <div>
      {days[date.getDay()]} {date.getDate()} {months[date.getMonth()]}{' '}
      {date.getHours()}:{date.getMinutes().toString().padStart(2, '0')}
    </div>
  )
}

export function Temperature({ value, unit }: { value: number; unit: string }) {
  return (
    <div>
      🌡️ {value} {unit}
    </div>
  )
}

function Sky({
  cloud_area_fraction,
  relative_humidity,
}: {
  cloud_area_fraction: number
  relative_humidity: number
}) {
  let cloudLevel = 0
  if (cloud_area_fraction >= 25 && cloud_area_fraction < 50) {
    cloudLevel = 1
  } else if (cloud_area_fraction >= 50 && cloud_area_fraction < 75) {
    cloudLevel = 2
  } else if (cloud_area_fraction >= 75) {
    cloudLevel = 4
  }

  const clouds = ['🌞', '🌤️', '🌥️', '☁️']

  if (cloudLevel === 0 || relative_humidity < 80) {
    return <span>{clouds[cloudLevel]}</span>
  } else {
    // TODO; Snow clouds if negative temp
    return <span>🌧️</span>
  }
}

export function Wind({
  speed,
  unit,
  direction,
}: {
  speed: number
  unit: string
  direction: number
}) {
  return (
    <div>
      🌬️ {speed} {unit}{' '}
      <span
        style={{
          display: 'inline-block',
          transform: 'rotate(' + direction + 'deg)',
        }}
      >
        ☝️
      </span>
    </div>
  )
}

type WeatherCardProps = {
  units: Units
  timePoint: TimePoint
}

export function WeatherCard({ units, timePoint }: WeatherCardProps) {
  const {
    air_pressure_at_sea_level,
    air_temperature,
    cloud_area_fraction,
    relative_humidity,
    wind_from_direction,
    wind_speed,
  } = timePoint.data.instant.details
  return (
    <div>
      <DateTime datetime={timePoint.time} />
      <Sky
        cloud_area_fraction={cloud_area_fraction}
        relative_humidity={relative_humidity}
      />
      <Temperature unit={units.air_temperature} value={air_temperature} />
      <Wind
        speed={wind_speed}
        unit={units.wind_speed}
        direction={wind_from_direction}
      />
    </div>
  )
}
