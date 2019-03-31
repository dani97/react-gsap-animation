import React, {useEffect, useRef} from 'react';
import {TweenMax, Linear} from 'gsap';
import logo from './logo.svg';
import './App.css';

const App = () => {
    let logoElement = useRef(null);



    useEffect(() => {
        TweenMax.to(
            logoElement,
            1,
            {
                repeat: -1,
                rotation: 360,
                ease: Linear.easeNone
            }
        )
    }, []);

    function scaleUp() {
        TweenMax.to(logoElement, 1, {
            scale: 1.25,
            ease: Linear.ease
        });
    }

    function scaleDown() {
        TweenMax.to(logoElement, 1, {
            scale: 0.75
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} onMouseEnter={scaleUp} onMouseLeave={scaleDown} ref={element => {logoElement = element}} className="App-logo" alt="logo"/>
                <p>
                   React + GSAP animation
                </p>
            </header>
        </div>
    );
}


export default App;
