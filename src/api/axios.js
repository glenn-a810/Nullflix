import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd2e2f91edbc573ffb4c025a7a22d3db7',
    language: 'ko-KR',
  },
})

export default instance
