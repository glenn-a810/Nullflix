import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'
import MovieModel from './MovieModel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'

function Row({ isLargeRow, title, id, fetchURL }) {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  useEffect(() => {
    fetchMovieData()
  }, [])

  const fetchMovieData = async () => {
    const request = await axios.get(fetchURL)
    setMovies(request.data.results)
  }

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <section className="row">
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModel {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  )
}

export default Row
