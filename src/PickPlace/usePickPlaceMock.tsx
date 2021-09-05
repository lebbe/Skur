import { useState } from 'react'

export function usePickPlaceMock(
  setLatLong: (lat: number, long: number) => void
) {
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
