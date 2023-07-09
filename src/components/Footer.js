import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedinIcon />
            <p>&copy; 2023 codecrustpizza.com</p>
            <Link to='/termsandconditions'>
                <a href='/termsandconditions'>Terms and Conditions </a>
            </Link>
            <span> | </span>
            <Link to='/privacypolicy'>
                <a href='/privacypolicy'> Privacy Policy</a>
            </Link>
        </div>
    </div>
  )
}

export default Footer