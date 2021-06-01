import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';


export default function TestimonialsCarousel() {
    return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={4000}
        >
          <>
            <img src={avatar1} alt="Client number 1" />
            <div className="myCarousel">
              <h3>John Doe 1</h3>
              <p>Amet et nisi aute eiusmod aute laboris. Reprehenderit nisi sit laborum amet. Voluptate amet fugiat culpa proident laboris do cillum amet qui sint sit.</p>
            </div>
          </>  
          <>
            <img src={avatar2} alt="Client number 2" />
            <div className="myCarousel">
              <h3>Jane Doe 2</h3>
              <p>Amet et nisi aute eiusmod aute laboris. Reprehenderit nisi sit laborum amet. Voluptate amet fugiat culpa proident laboris do cillum amet qui sint sit.</p>
            </div>
          </>
          <>
            <img src={avatar3} alt="Client number 3" />
            <div className="myCarousel">
              <h3>John Doe 3</h3>
              <p>Amet et nisi aute eiusmod aute laboris. Reprehenderit nisi sit laborum amet. Voluptate amet fugiat culpa proident laboris do cillum amet qui sint sit.</p>
            </div>
          </>
          <>
            <img src={avatar4} alt="Client number 4" />
            <div className="myCarousel">
              <h3>John Doe 4</h3>
              <p>Amet et nisi aute eiusmod aute laboris. Reprehenderit nisi sit laborum amet. Voluptate amet fugiat culpa proident laboris do cillum amet qui sint sit.</p>
            </div>
          </>
        </Carousel> 
    )
}
