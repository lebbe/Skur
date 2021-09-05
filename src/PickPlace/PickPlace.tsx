import React, { useState } from 'react'
import places from './places'

type PickPlaceProps = {
  query: string
  setQuery: (query: string) => void
  doSearch: () => void
}

export default function PickPlace({
  query,
  setQuery,
  doSearch,
}: PickPlaceProps) {
  return (
    <>
      <input
        type="search"
        list="places"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onBlur={doSearch}
      />
      {/* I do the search on blur event, just a dummy! */}
      <button>🔎</button>
      <datalist id="places">
        {places.map((place) => (
          <option key={place} value={place}></option>
        ))}
      </datalist>
    </>
  )
}

type APIResult = {
  navn: {
    geojson: {
      geometry: {
        coordinates: [number, number]
      }
    }
  }[]
}

export function usePickPlace(setLatLong: (lat: number, long: number) => void) {
  const [query, setQuery] = useState('')

  async function doSearch() {
    const response = await fetch(
      `https://ws.geonorge.no/stedsnavn/v1/sted?sok=${query}&utkoordsys=4258&treffPerSide=1&side=1`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )

    const json: APIResult = await response.json()

    const [long, lat] = json.navn[0].geojson.geometry.coordinates

    setLatLong(lat, long)
  }

  return {
    query,
    setQuery,
    doSearch,
  }
}

export function useLatLong() {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  function setLatLong(lat: number, long: number) {
    setLat(lat)
    setLong(long)
  }

  return { lat, long, setLatLong }
}
