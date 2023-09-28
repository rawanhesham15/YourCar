import React from 'react';
import "./HomeStyle.css"

function Home(probs) {
    return(
        <div className='home'>
            <div className="info-container">
                <div className="info-text">
                    <h1>Find the perfect car for you at YourCar.</h1>
                    <p>We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!</p>
                    <button className='discover'> Discover <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path d="M21 7.5L7 21.5M9.33333 7.5H21V19.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
