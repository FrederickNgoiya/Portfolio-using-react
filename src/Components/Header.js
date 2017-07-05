import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{this.props.name}</h1>
               
               <hr />
               <ul className="social"> {
            this.props.websitelinks.map((links)=> {
              return <li key={links.name}>< a href = {links.url}>< i className = {links.className}></i></a> </li>
            })
          }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
    );
  }
}
export default Header;
