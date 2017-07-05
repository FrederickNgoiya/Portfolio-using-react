import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">

         <div className="row">

            <div className="twelve columns collapsed">

               <h1>Check Out Some of My Works.</h1>


               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

             	   <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-01" title="">
                           <img alt="" src="images/portfolio/computervision.PNG"/>
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>Computer Vision</h5>
                                 <p>A computer vision course on Udemy</p>
             					   </div>
                           </div>
                       <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
             		</div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-02" title="">
                           <img alt="" src="images/portfolio/micro.PNG"/>
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>Electronics</h5>
                                 <p>Microprocessors project:Reading real time data collection using matlab serial port</p>
             					   </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
             		</div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-03" title="">
                           <img alt="" src="images/portfolio/logic.PNG"/>
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>Logic board</h5>
                                 <p> 4 bit binary encryption system</p>
             					   </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
             		</div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-04" title="">
                           <img alt="" src="images/portfolio/RF.png"/>
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>RF circuit</h5>
                                 <p>RF</p>
             					   </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
             		</div>


            <div id="modal-01" className="popup-modal mfp-hide">

   		      <img className="scale-with-grid" src="images/portfolio/computervision.PNG" alt="" />

   		      <div className="description-box">
   			      <h4>Computer Vision</h4>
   			      <p>I created a course on computer vision using opencv python library</p>

   		      </div>

               <div className="link-box">
                  <a href="https://www.udemy.com/pythoncv">Details</a>
   		         <a className="popup-modal-dismiss">Close</a>
               </div>

   	      </div>

            <div id="modal-02" className="popup-modal mfp-hide">

   		      <img className="scale-with-grid" src="images/portfolio/micro.PNG" alt="" />

   		      <div className="description-box">
   			      <h4>Electronics</h4>
   			      <p>Microlab Project - Using Matlab to plot real time Accelorometer Values on a 2D plot </p>

   		      </div>

               <div className="link-box">
                  <a href="https://www.youtube.com/watch?v=07g6cgwShDE">Details</a>
   		         <a className="popup-modal-dismiss">Close</a>
               </div>

   	      </div>

            <div id="modal-03" className="popup-modal mfp-hide">

   		      <img className="scale-with-grid" src="images/portfolio/logic.png" alt="" />

   		      <div className="description-box">
   			      <h4>Judah</h4>
   			      <p>Microlab Project - Using Matlab to plot real time Accelorometer Values on a 2D plot</p>

   		      </div>

               <div className="link-box">
                  <a href="https://youtu.be/slBSqQgzE-Y">Details</a>
   		         <a className="popup-modal-dismiss">Close</a>
               </div>

   	      </div>

            <div id="modal-04" className="popup-modal mfp-hide">

   		      <img className="scale-with-grid" src="images/portfolio/RF.png" alt="" />

   		      <div className="description-box">
   			      <h4>Into the Light</h4>
   			      <p>RF circuit receiver</p>

   		      </div>

               <div className="link-box">
                  <a href="https://www.youtube.com/watch?v=B0WxUec8_iE">Details</a>
   		         <a className="popup-modal-dismiss">Close</a>
               </div>

   	      </div>

              </div>

   	      </div>




         </div>

      </section>
    );
  }
}
export default Portfolio;
