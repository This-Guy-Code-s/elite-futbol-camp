 import React from 'react'
import {connect} from 'react-redux'
import '../../util/styles/sass/abt-seasons.scss'
import '../../util/styles/sass/abt.scss'
import '../../util/styles/css/curriculum.css'
import '../../util/styles/sass/sessions.scss'
import NavBar from '../header/NavBar'
import ScrollBtns from '../header/ScrollBtns'
import AboutTxt from './AboutTxt'
import AboutSeasons from './AboutSeasons'
import Curriculum from './Curriculum'
import Sessions from './Sessions'
import Adresss from './address/'

class About extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
     <div className='container-fluid abt-page'>
     <NavBar/>
     <ScrollBtns/>
     <AboutTxt/>
     <AboutSeasons/>
    <Adresss/>
     <Curriculum/>
     <Sessions/>
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
mapStateToProps
,
  {}
  )(About)
