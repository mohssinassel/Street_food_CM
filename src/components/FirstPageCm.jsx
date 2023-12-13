import React, {useEffect} from 'react';
import "../styles/firstPageCm.css";
import { Link } from "react-router-dom";


export default function FirstPageCm(){
  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
    };

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton && prevButton) {
      nextButton.addEventListener('click', handleNextClick);
      prevButton.addEventListener('click', handlePrevClick);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener('click', handleNextClick);
        prevButton.removeEventListener('click', handlePrevClick);
      }
    };
  }, []);
  return (
      <div className="htg">
          <div className="container">
        <div id="slide">
            <div className="item" style={{ backgroundImage: `url(/images/CDM.jpg)`}}>
                <div className="content">
                    <div className="name">BRIOUAT</div>
                    <div className="des">Street Food Goals: Moroccan Edition!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(/images/maroc.jpg)`}}>
                <div className="content">
                    <div className="name">MSEMEN</div>
                    <div className="des">Take a Culinary World Tour Without Leaving the Street!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(/images/wc2030.jpg)`}}>
                <div className="content">
                    <div className="name">MAAKOUDA</div>
                    <div className="des">From the Stadium to the Streets: Feast Like a Champion!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(/images/couscous.jpg)`}}>
                <div className="content">
                    <div className="name">ZAALOUK</div>
                    <div className="des">Go Beyond Goals: Celebrate with Moroccan Street Culinary Magic!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
            
            <div className="item"style={{ backgroundImage: `url(/images/stadium.jpg)`}}>
                <div className="content">
                    <div className="name">HARIRA</div>
                    <div className="des">Score Big with Moroccan Street Eats!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(/images/street.jpg)`}}>
                <div className="content">
                    <div className="name">KEFTA</div>
                    <div className="des">Experience Flavor Fiestas on Every Street Corner!</div>
                    <button><Link to="/home" > Go Deeper</Link></button>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button id="prev"><i className="fa-solid fa-angle-left"></i></button>
            <button id="next"><i className="fa-solid fa-angle-right"></i></button>
        </div>
    </div>
      </div>
  )
}