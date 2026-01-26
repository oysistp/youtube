import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import VideoSlider from '../components/video/VideoSlider'
import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'



const Home = () => {
  return (
    <Main>
      <Today/>
      <Music/>
      <VideoSlider videos={movieText} title='🤗 추천 영화입니다.' id='movie'/>
      <VideoSlider videos={BookText} title='🤗 추천 도서입니다.' id='movie'/>
      <VideoSlider videos={AnimeText} title='🤗 추천 영화' id='movie'/>
      {/* <VideoSlider title='😗 추천 도서' id='book' />
      <VideoSlider id='anime'/> */}
    </Main>
  )
}

export default Home