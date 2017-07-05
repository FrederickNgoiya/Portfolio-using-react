import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    return (
      <section id="testimonials">
         <div className="text-container">
            <div className="row">
               <div className="two columns header-col">
                  <h1><span>Client Testimonials</span></h1>
               </div>
               <div className="ten columns flex-container">
                  <div className="flexslider">
                     <ul className="slides">
                        <li>
                           <blockquote>
                              <p>{this.props.testimony}
                              </p>
                              <cite>Student, Udemy </cite>
                           </blockquote>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
      </section>
    );
  }
}
export default Testimonial;
