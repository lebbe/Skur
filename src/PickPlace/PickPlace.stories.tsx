import React from 'react'
import PickPlace, { useLatLong, usePickPlace } from './PickPlace'
import { usePickPlaceMock } from './usePickPlaceMock'

export default {
  title: 'Skur/Components/Pick Place',
}

export function Simple() {
  const { lat, long, setLatLong } = useLatLong()
  return (
    <>
      <PickPlace {...usePickPlaceMock(setLatLong)} />
      <div>
        Lat: {lat}, Long: {long}
      </div>
    </>
  )
}
