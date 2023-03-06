import React from 'react'
import './Banner.css'
import bannerPhoto from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={bannerPhoto} id="banner-photo"/>
        <p id="banner-words">STORIES OF FREEDOM</p>
        <span id="banner-bottom"></span>
    </div>
  )
}

export default Banner