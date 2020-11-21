import React from 'react'
// import logo from './logo.svg';
import './util/styles/css/App.css';
import './util/styles/css/snow-and-wind.css';
import Header from './comps/header/'
import Main from './comps/center/'
import Footer from './comps/footer/'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
      <Route render={()=>{
        return (
      <div className="App">

            <Header />

      <Main/>


     <Footer />
      </div>

          )
      }}/>

     

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
  )(App);