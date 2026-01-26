import React from 'react'
import { Link } from 'react-router-dom'
import { AnimeText } from '../../data/anime'

const Anime = () => {
  return (
   <section id='book'>
        <h2>🤡추천 애니를 소개합니다.</h2>
        <div className="video__inner">
        {AnimeText.map((anime, key)=>(
        <div className="video" key={key}>
          <div className="anime__thumb play__icon">
            <Link to={`/anime/${anime.videoId}`}>
              <img src={anime.img} alt=""/>
            </Link>
            </div>
        </div>
      ))}
          
        </div>
    </section>
  )
}

export default Anime