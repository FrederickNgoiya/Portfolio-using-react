import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">


        <div className="row education">

           <div className="three columns header-col">
              <h1><span>Education</span></h1>
           </div>

           <div className="nine columns main-col">

              <div className="row item">

                 <div className="twelve columns">

                    <h3>University of South Florida</h3>
                    <p className="info">  B.S Degree in Electrical Engineering <span>&bull;</span> <em className="date">December 2017</em></p>



                 </div>

              </div>



           </div>

        </div>


        <div className="row work">

           <div className="three columns header-col">
              <h1><span>Work</span></h1>
           </div>

           <div className="nine columns main-col">

              <div className="row item">

                 <div className="twelve columns">

                    <h3>{this.props.company}</h3>
                    <p className="info">{this.props.company} <span>&bull;</span> <em className="date">{this.props.years}</em></p>

                    <p>
                        {this.props.description1}
                    </p>

                 </div>

              </div>

              <div className="row item">

                 <div className="twelve columns">

                    <h3>{this.props.company1}</h3>
                    <p className="info">{this.props.title1}<span>&bull;</span> <em className="date">{this.props.title1}</em></p>

                    <p>
                   {this.props.description2}
                    </p>

                 </div>

              </div>
              <div className="row item">

               <div className="twelve columns">

                  <h3>{this.props.company3}</h3>
                  <p className="info"> {this.props.title3}<span>&bull;</span> <em className="date">{this.props.years3}</em></p>
                  <p>
                    {this.props.description3}
                  </p>
               </div>
            </div>
           </div>

        </div>

        <div className="row skill">

           <div className="three columns header-col">
              <h1><span>Skills</span></h1>
           </div>

           <div className="nine columns main-col">

              <p>
              {this.props.bio}
              </p>

  				<div className="bars">

  				   <ul className="skills">
  					   <li><span className="bar-expand python"></span><em>Python</em></li>
                    <li><span className="bar-expand javascript"></span><em>JavaScript</em></li>
  						<li><span className="bar-expand cplus"></span><em>C++</em></li>
  						<li><span className="bar-expand css"></span><em>CSS & HTML5 </em></li>
  						<li><span className="bar-expand html5"></span><em>Matlab</em></li>
                    <li><span className="bar-expand mongodb"></span><em>MongoDB</em></li>
  					</ul>

  				</div>

  			</div>

        </div>

     </section>


    );
  }
}
export default Resume;
