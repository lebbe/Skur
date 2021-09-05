import React from 'react'
import PickPlace, { useLatLong, usePickPlace } from './PickPlace'

export default function Skur() {
  const { lat, long, setLatLong } = useLatLong()
  return (
    <>
      <PickPlace {...usePickPlace(setLatLong)}></PickPlace>

      <div>
        Lat: {lat}, Long: {long}
      </div>
    </>
  )
}
