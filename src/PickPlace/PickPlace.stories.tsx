import React, { useState } from 'react'
import PickPlace, { useLatLong, usePickPlace } from './PickPlace'

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

function usePickPlaceMock(setLatLong: (lat: number, long: number) => void) {
  const [query, setQuery] = useState('')

  async function doSearch() {
    // Mock, just set coords for Oslo...
    setTimeout(function () {
      setLatLong(59.91187, 10.73353)
    }, 100)
  }

  return {
    query,
    setQuery,
    doSearch,
  }
}
