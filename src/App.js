import React, { Component } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonial from './Components/Testimonial';


class App extends Component {
  render() {
      return (
      <div className= "App">
      <Header
      name={this.props.ResData.main.name}
      description={this.props.ResData.main.description}
      websitelinks = {this.props.ResData.main.social}
      city = {this.props.ResData.main.city}
      occupation = {this.props.ResData.main.occupation}/>

      <About
      aboutme={this.props.ResData.main.description}
      contact = {this.props.ResData.main.address}
      street= {this.props.ResData.main.address.street}
      city = {this.props.ResData.main.address.city}
      state = {this.props.ResData.main.address.state}
      zip = {this.props.ResData.main.address.zip}
      phone = {this.props.ResData.main.phone}
      email={this.props.ResData.main.email}
      country ={this.props.ResData.main.country}
      namecontact={this.props.ResData.main.name}
      resumelink ={this.props.ResData.main.resumelink} />

      <Resume
       company = {this.props.ResData.resume.work1.company}
       title = {this.props.ResData.resume.work1.title}
       years = {this.props.ResData.resume.work1.years}
       description1={this.props.ResData.resume.work1.description}

       skills = {this.props.ResData.main.skills}
       testimony = {this.props.ResData.main.testimony}

       company1 = {this.props.ResData.resume.work2.company}
       title1 = {this.props.ResData.resume.work2.title}
       years1 = {this.props.ResData.resume.work2.years}
       description2={this.props.ResData.resume.work2.description}

       company3 = {this.props.ResData.resume.education.companys}
       title3 = {this.props.ResData.resume.education.titles}
       years3 = {this.props.ResData.resume.education.year}
       description3={this.props.ResData.resume.education.descriptions}/>



      <Portfolio/>



      <Testimonial
      testimony = {this.props.ResData.main.testimony}/>



      <Contact
      contactme = {this.props.ResData.main.contact}
      contact = {this.props.ResData.main.address}
      street= {this.props.ResData.main.address.street}
      city = {this.props.ResData.main.address.city}
      state = {this.props.ResData.main.address.state}
      name={this.props.ResData.main.name}
      phone = {this.props.ResData.main.phone}/>





      <Footer/>





      </div>
    );
  }
}


export default App;
