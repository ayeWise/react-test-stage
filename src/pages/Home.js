import React from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/wallpaperflare.com_wallpaper.jpg';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Code Crust Pizzeria</h1>
            <h2>GET SOME OF THE GOOD STUFF!</h2>
            <Link to='/menu'>
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home