import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios'

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get('q')

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=true&query=${searchTerm}`
      )
      setSearchResults(request.data.results)
    } catch (error) {
      console.log('error', error)
    }
  }
}

export default SearchPage
