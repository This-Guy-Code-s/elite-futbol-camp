import React from 'react'
// import logo from './logo.svg';
import '../../util/styles/css/main.css';
import {connect} from 'react-redux'

import Intro from './intro/'

import Slider from './slide-show/'
import PlayerComp from './video-player/Player-holder'

import Contact from './contact/'
import Address from './address/'





class Center extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
      <div className="Main">

      <section className="center-secs">
      <Intro />
      </section>

      <section className="center-secs">
      <PlayerComp />
      <Slider />
      </section>

      <section className="center-secs">
      <Contact />
      <Address/>
      
      </section>
      
      </div>
    );
  }
}



const mapStateToProps = state =>{
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  {}
  )(Center);
