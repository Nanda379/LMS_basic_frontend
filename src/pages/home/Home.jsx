import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import "./home.css";
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {

  return (
    <div>
      <div className='home'>
        <div className='home-content'>
          <h1>Welcome to our E-Learning Platform</h1>
          <p>Learn,Grow,Excel</p>
          <button onClick={()=>Navigate("/courses")} className='common-btn'>Get Started</button>
        </div>
      </div>
      <Testimonials />
    </div>
  )
}

export default Home;