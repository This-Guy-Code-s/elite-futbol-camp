import React from 'react'
import '../../util/styles/css/header-wave-frame.css';
import {Container} from 'reactstrap'
import Lango from './Lango'
import {connect} from 'react-redux'



class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
     <section className="soccer-hero">
     <div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
<div className="snow"></div>
  <div className="soccer-content">
    <p className="soccer-content-p">Hello everyone! Come join our camp and have your kids do something fun and rewarding this winter</p>
     <Container className='soccer-container'>
    <a href="#information" className="soccer-btn soccer-a">Learn More</a>
    <Lango/>
  </Container>
    </div>
   
  <div className="soccer-waves"></div>
</section>
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



