import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'
import requests from './api/requests'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated} />
      <Row title="Actions" id="AM" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" id="CM" fetchURL={requests.fetchComedyMovies} />
    </div>
  )
}

export default App
