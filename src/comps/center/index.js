import React from 'react'
// import logo from './logo.svg';
import '../../util/styles/css/main.css';
import {connect} from 'react-redux'

import Intro from './intro/'
import Lz from './intro/Lz'

import Slider from './slide-show/'
import VideoPlayerComps from './video-player/Player-holder'

import Contact from './contact/'
import Address from './address/'

import MsgBoard from './message-board/'





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


      <section className="container center-secs">
      <Lz/>
      </section>


      <section className="center-secs">
      <VideoPlayerComps />
      </section>


      


      <section className="container center-secs">
      <Slider />
      </section>

      <section className="center-secs">
      <Contact />
      <Address/>
      <MsgBoard />
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
