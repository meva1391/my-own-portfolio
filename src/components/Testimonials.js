import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h1>my happy clients</h1>
            <div className="container">
                <div className="tistimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>
    )
}
