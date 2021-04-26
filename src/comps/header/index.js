 import React from 'react'
import {connect} from 'react-redux'
import '../../util/styles/css/navbar.css'
import '../../util/styles/css/top-banner.css'
import '../../util/styles/css/scroll-btns.css'
import TopBanner from './TopBanner'
import NavBar from './NavBar'
import ScrollBtns from './ScrollBtns'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
     <header className="app-home-header">

<TopBanner/>


{/*----------------------------------------*/}

       <label htmlFor="menu__toggle" className="menu__toggle-label">
   
  </label>
  <NavBar/>


{/*----------------------------------------*/}


  <ScrollBtns/>

     </header>

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
  )(Header)


