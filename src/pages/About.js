import React from 'react'
import WoodOven from '../assets/woodoven4.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about' style={{backgroundImage: `url(${WoodOven})`}}>
        <div className='aboutBottom'>    
            <h1> ABOUT US</h1>
            <p>
                Welcome to Code Crust Pizzeria! We are a cutting-edge pizzeria that combines the love for pizza 
                with the passion for coding. Our team of talented developers and pizza enthusiasts has created a 
                unique online platform that brings the best of both worlds together.
            </p>
            <p></p>
            <p>
                Established in 2023, Code Crust Pizzeria aims to revolutionize the pizza industry by leveraging 
                technology and innovation. Our mission is to provide our customers with a seamless online ordering 
                experience while serving them delicious and mouth-watering pizzas.
            </p>
            <p></p>
            <p>
                At Code Crust Pizzeria, we understand that every pizza lover has different preferences. That's why we 
                offer a wide variety of pizzas to cater to diverse tastes. From classic margherita to gourmet specialty 
                pizzas, our menu is carefully crafted to satisfy even the most discerning palates. We use only the finest 
                and freshest ingredients to ensure that each pizza is a flavorful masterpiece. 
            </p>
            <p></p>
            <p>
                Convenience is at the heart of our service. With our user-friendly website and intuitive interface, 
                ordering your favorite pizza has never been easier. Whether you're browsing from your desktop, laptop, 
                tablet, or phone, our fully responsive web page adapts to any device, providing a seamless browsing 
                experience. Our online ordering system allows you to customize your pizza with a range of toppings, select 
                your preferred crust, and even schedule delivery or pickup according to your convenience. 
            </p>
            <p></p>
            <p>
                We take pride in our commitment to customer satisfaction. Our dedicated team works tirelessly to ensure 
                that each order is prepared with precision and delivered promptly. We value your feedback and continuously 
                strive to improve our services to meet and exceed your expectations. 
            </p>
            <p></p>
            <p>
                Visit us at our physical location or place an order online to experience the unique fusion of technology 
                and pizza that Code Crust Pizzeria has to offer. Our store is conveniently located at 123 Main Street New 
                Orleans, La, 70360, and our opening hours are from 10:00 AM to 12:00 PM. Whether you're craving a quick 
                lunch, a family dinner, or a late-night snack, we're here to serve you with a smile. 
            </p>
            <p></p>
            <p>
                Join us in our pizza revolution 
                and become a part of the Code Crust Pizzeria community. We look forward to delighting your taste buds 
                with our delectable pizzas and providing you with an exceptional dining experience. Feel free to reach
                 out to us at 1-555-123-4567 for any inquiries or assistance. Thank you for choosing Code Crust Pizzeria!
            </p>
        </div>
    </div>
  )
}

export default About