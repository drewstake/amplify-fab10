import React from 'react';
import './Home.css'; // Ensure the CSS file is imported

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="left-section">
                    <img src="/images/front.png" alt="Front of the store" className="store-img" />
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.696302488301!2d-75.5025759250937!3d40.39342305705926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c427b780127c5d%3A0xdce4fd5420c217ed!2sFabulous%2010%20Nails!5e0!3m2!1sen!2sus!4v1715395625192!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="info-section">
                    <h2>Visit Us</h2>
                    <p><span className="icon">📍</span> 436 Pottstown Ave., Pennsburg, PA, 18073</p>
                    <p><span className="icon">📞</span> (215)-679-6470</p>
                    <div className="hours">
                        <h2>OPENING HOURS</h2>
                        <ul>
                            <li>SAT: 9 AM – 6 PM</li>
                            <li>SUN: Closed</li>
                            <li>MON-FRI: 10 AM – 7 PM</li>
                        </ul>
                    </div>
                    <a href="https://squareup.com/appointments/book/yvzkpxjnwzqnnb/LRZJ8PYM8GKQH/start" 
                       target="_blank" 
                       className="booking-link">Book Now</a>
                </div>
                <img src="/images/interior.png" alt="Interior of the store" className="interior" />
            </div>
        </div>
    );
}

export default Home;
