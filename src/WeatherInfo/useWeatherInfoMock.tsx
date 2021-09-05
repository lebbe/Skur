import Mockdata from './mock-data'
import { TimePoint, WeatherInfoProps } from './WeatherInfo'

export function useWeatherInfoMock(
  lat: number,
  long: number
): WeatherInfoProps {
  let timepoints: TimePoint[] = []
  if (lat > 0 && long > 0) {
    timepoints = Mockdata.properties.timeseries
  }
  return {
    units: {
      air_pressure_at_sea_level: 'hPa',
      air_temperature: 'celsius',
      cloud_area_fraction: '%',
      precipitation_amount: 'mm',
      relative_humidity: '%',
      wind_from_direction: 'degrees',
      wind_speed: 'm/s',
    },
    timepoints: timepoints,
  }
}
