import React from 'react'
import {connect} from 'react-redux'
import '../../util/styles/sass/intro.scss'
import {NavLink} from 'react-router-dom'
import {toggle_lango} from '../../redux/actions'


class Intro extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

componentDidMount(){
      document.querySelector('.efc').style=`
      text-align: center;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-size:fill;
  background-repeat:no-repeat;
  background-position:top center;
  background-color:#fff;
  overflow:hidden;
  `  
}


  render(){
    return (
   


<div className="untitled">

  <div className="untitled__slides">
    <div className="untitled__slide">
      <div className="untitled__slideBg">
        <span className="scroll-btn-btn-circle scroll-btn-btn-or btn" onClick={this.props.toggle_lango} >{this.props.useSpanish?"English?":"Española?"}</span>
      </div>
      <div className="untitled__slideContent">
      <p className="headzx"><small className="headzx">{this.props.useSpanish?this.props.app_language.intro.spanish['sign-up-msg']:this.props.app_language.intro.english['sign-up-msg']}</small></p>
        <br/><NavLink className="button" to="/home">{this.props.useSpanish?"Inscribirse":"Sign Up"}</NavLink>
  <NavLink className="button" to="/home"><i className="fas fa-home"></i></NavLink>
      </div>
    </div>
    <div className="untitled__slide">
      <div className="untitled__slideBg">
        <span className="scroll-btn-btn-circle scroll-btn-btn-or btn" onClick={this.props.toggle_lango} >{this.props.useSpanish?"English?":"Española?"}</span>
      </div>
      <div className="untitled__slideContent">
        
         <p className="headzx"><small className="headzx">{this.props.useSpanish?this.props.app_language.intro.spanish['contact-us-msg']:this.props.app_language.intro.english['contact-us-msg']}</small></p>
        <br/><NavLink className="button" to="/home">{this.props.useSpanish?"Contacta con nosotros":"Contact Us"}</NavLink>
  <NavLink className="button" to="/home"><i className="fas fa-home"></i></NavLink>
      </div>
    </div>
    <div className="untitled__slide">
      <div className="untitled__slideBg">
        <span className="scroll-btn-btn-circle scroll-btn-btn-or btn" onClick={this.props.toggle_lango} >{this.props.useSpanish?"English?":"Española?"}</span>
      </div>
      <div className="untitled__slideContent">
        <p className="headzx"><small className="headzx">{this.props.useSpanish?this.props.app_language.intro.spanish['learn-more-msg']:this.props.app_language.intro.english['learn-more-msg']}</small></p>
        <br/><NavLink className="button" to="/home" >{this.props.useSpanish?"Aprende más":"Learn More"}</NavLink>
  <NavLink className="button" to="/home"><i className="fas fa-home"></i></NavLink>
      </div>
    </div>
    <div className="untitled__slide">
      <div className="untitled__slideBg">
        <span className="scroll-btn-btn-circle scroll-btn-btn-or btn" onClick={this.props.toggle_lango} >{this.props.useSpanish?"English?":"Española?"}</span>
      </div>
      <div className="untitled__slideContent">
        <p className="headzx"><small className="headzx">{this.props.useSpanish?this.props.app_language.intro.spanish['sports-shop-msg']:this.props.app_language.intro.english['sports-shop-msg']}</small></p>
        <br/><NavLink className="button" to="/home">{this.props.useSpanish?"Tienda de deportes":"Sports Shop"}</NavLink>
  <NavLink className="button" to="/home"><i className="fas fa-home"></i></NavLink>
      </div>
    </div>
  </div>
  <div className="untitled__shutters"></div>
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
  {toggle_lango}
  )(Intro)



