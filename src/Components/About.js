import React, { Component } from 'react';



class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/fred.png" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{this.props.aboutme}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
   						   <span>{this.props.namecontact}</span><br/>
   						   <span>{this.props.street}<br/>
   						         {this.props.city}, {this.props.state} {this.props.zip} {this.props.country}
                        </span><br/>
   						   <span>{this.props.phone}</span><br/>
                        <span> {this.props.email}</span>
   					   </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={this.props.resumelink} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
export default About;
