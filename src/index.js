import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const ResumeData = {

  main: {
    "name":"Frederick Ngoiya",
    "occupation":"Web developer, programmer and designer",
    "description":"I am passionate about software engineering. Currently, I am pursuing a bachelor's degree in electrical engineering at the University of South Florida. I am currently doing research using machine learning tools like, tensorflow and Keras. During my free time I like to develop web applications using reactjs and also, learn about computer vision",
    "image":"profilepic.jpg",
    "testimony":"The course is kept short with clear & crisp explanations. The codes are really explained in a simpler manner. Overall organization of the course was in a sync which lead to easy navigation from simpler concepts of staring with images to video analysis. Highly recommend it for those who wants to begin image & video analysis with Open CV.",
    "email": "fngoiya@hotmail.com",
    "resumelink":"https://www.dropbox.com/s/ybwz2igoryid2lc/Frederick_Ngoiya_resume_.pdf?dl=0",
    "contact": "You got this far you might as well send me message",
    "phone": "8134544276",
     "state":"FL",
    "Country":"US",
    "address":{
      "street":"3630 Jefferson Commons Dr",
      "city":"Tampa",
      "state":"FL",
      "zip": "33613"
    },
    "website": "http://www.techguywebsolutions.com",
    "resumedownload":"http://something.com",
    "social":[
      {
        "name":"twitter",
        "url":"https://twitter.com/frederickngoiya",
        "className":"fa fa-twitter"
      },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/frederick-ngoiya-b0627688",
        "className":"fa fa-linkedin"
      },
      {
        "name":"instagram",
        "url":"https://www.instagram.com/fredieyy/",
        "className":"fa fa-instagram"
      },
      {
        "name":"github",
        "url":"https://github.com/frederickngoiya",
        "className":"fa fa-github"
      }

    ]
  },
  "resume":{
    "education":
      {
        "companys":"University of South Florida",
        "titles": "Teacher Assistant",
        "year":"August 2015 – Present",
        "descriptions":"Served as teaching assistant and grader for Foundations of Engineering Lab for 60 students. I also assisted students with questions regarding their assigned projects and homework during office hours. Additionally,I developed and assigned electrical engineering and robotics related projects to students. Moreover, I organized and distributed learning resources to students in class. Lastly, I Mentored students to continue their studies in STEM related fields."
      },
        "work1":
      {
        "company":"RFID Center For Applied Research, Tampa, FL",
        "title":" Research Assistant",
        "years":" August 2016 – Present",
        "description":"I applied machine learning algorithms like neural networks to model complex mathematical models. I also created datasets for training and testing the model. Lastly, I created a linear regression model using Tensorflow and Keras python libraries."
      },
       "work2":
      {
        "company":"Udemy",
        "title":"Online Instructor",
        "years":"August 2016 – Present",
        "description":" Developed a course outline for 1460 students interested to learn python and the OpenCV library. I was also able to Responded to technical difficulties that students experienced while taking the course. Additionaly , I Provided advice to individual students on their computer vision related projects. Lastly, I recommended different resources to help student further understand computer vision concepts"
    },

    "skills":[
      {
        "name":"Photoshop",
        "level":"60%"
      },
      {
        "name":"Illustrator",
        "level":"55%"
      },
      {
        "name":"Wordpress",
        "level":"50%"
      },
      {
        "name":"CSS",
        "level":"90%"
      },
      {
        "name":"HTML5",
        "level":"80%"
      },
      {
        "name":"jQuery",
        "level":"50%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Coffee Cup",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Illustrator",
        "tags":"Branding, Web Design",
        "image":"coffee.jpg",
        "url":"http://port1.com",
        "modal":"#modal-01"
      },
      {
        "title":"Console",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Web Design",
        "tags":"Branding, Web Development",
        "image":"console.jpg",
        "url":"http://port2.com",
        "modal":"#modal-02"
      },
      {
        "title":"Judah",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Web Development",
        "tags":"Branding, Web Programming",
        "image":"judah.jpg",
        "url":"http://port3.com",
        "modal":"#modal-03"
      },
      {
        "title":"Into The Light",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Photography",
        "tags":"Photography, Design",
        "image":"into-the-light.jpg",
        "url":"http://port4.com",
        "modal":"#modal-04"
      },
      {
        "title":"Farmer Boy",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Branding",
        "tags":"Branding, Web Design",
        "image":"farmerboy.jpg",
        "url":"http://port5.com",
        "modal":"#modal-05"
      },
      {
        "title":"Girl",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Photography",
        "tags":"Photography, Graphic Design",
        "image":"girl.jpg",
        "url":"http://port6.com",
        "modal":"#modal-06"
      },
      {
        "title":"Origami",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Illustration",
        "tags":"Branding, Illustration",
        "image":"origami.jpg",
        "url":"http://port7.com",
        "modal":"#modal-07"
      },
      {
        "title":"Retrocam",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Web Development",
        "tags":"Photography",
        "image":"retrocam.jpg",
        "url":"http://port8.com",
        "modal":"#modal-08"
      }
    ]
  },
  "testimonials":{
    "testimonials":[
      {
        "text":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "user":"John Doe"
      },
      {
        "text":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "user":"Steve Smith"
      }
    ]
  }
}

ReactDOM.render(<App  ResData={ResumeData}/>, document.getElementById('root'));
registerServiceWorker();
