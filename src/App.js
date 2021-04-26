import React from 'react'
import './util/styles/css/App.css';
import Intro from './comps/intro/'
import Home from './comps/home/'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import About from './comps/about/'
import {toggle_msg_board} from './redux/actions'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



  render(){
    return (
      <div className="efc">




      <Route exact path='/' render={()=>{
        return (
      <div className="App">
            <Intro />
      </div>
          )
      }}/>


      <Route exact path='/home' render={()=>{
        return (
      <div className="App">
            <Home />
            <label className="btn mb-btn mb-btn-open" htmlFor="nav" onClick={()=>{return this.props.toggle_msg_board(this.props.msg_board_state)}}>{this.props.useSpanish?"Tablero de mensajes":"Message Board"}</label>

      </div>
          )
      }}/>


            <Route exact path='/about' render={()=>{
        return (
      <div className="contianer-fluid About">
            <About />

      </div>
          )
      }}/>

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
  {toggle_msg_board}
  )(App);
