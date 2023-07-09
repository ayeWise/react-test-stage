import React from 'react'
import '../styles/FAQ.css'
import faqBanner from '../assets/bdaycake.jpg'

function FAQ() {
  return (
    <div>
    <div className='faqHeader' style={{backgroundImage: `url(${faqBanner})`}}> 
        <div>
            <h1>
            Birthday FAQ
            </h1>
            <p></p>
            <p>
                Code Crust Pizzeria's Most Frequently Asked Questions
            </p>
        </div>
    </div>
    <div className='faqBottom'>
        <h1>
            "Can I order a custom pizza?"
        </h1>
        <p>
            Feel free to create your own pizza using any of our delicious ingredients!
        </p>
        <p>&nbsp;</p>
        <h1>
            "Do you host birthday parties?"
        </h1>
        <p>
            We host parties on Saturdays and Sundays with an attendee limit of 30 people, if you would like to arrive early
            to set up for your party, you will be given access to your party room 30 minutes prior to your event!
        </p>
        <p>&nbsp;</p>
        <h1>
            "What happens if I lost an item?"
        </h1>
        <p>
            Please call or visit the location where you recieveed your order and a team member will assist you!
        </p>
        <p>&nbsp;</p>
        <h1>
            "What if I send someone to pick up my order?"
        </h1>
        <p>
            If you've designated someone to pick up your order on your behalf, they must provide the name on the order and
            the confirmation number.
        </p>
        <p>&nbsp;</p>
        <p>
            You can also call and provide the name and phone number of the person picking up your order!
        </p>
        <p>&nbsp;</p>
        </div>
    </div>
    
  )
}

export default FAQ