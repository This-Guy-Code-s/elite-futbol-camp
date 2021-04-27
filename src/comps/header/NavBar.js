 import React from 'react'
import {connect} from 'react-redux'
import {nav_toggle} from '../../redux/actions'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Contact from '../contact/'


class TopBanner extends React.Component{
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
  overflow-y:auto;
  `
}



  render(){
    return (
<nav className="menu" style={{zIndex:this.props.nav_state?3:1}}>
  <input id ="menu__toggle" type="checkbox" className='menu__toggle' checked={this.props.nav_state?true:false} onChange={()=>{return this.props.nav_state?true:false}}/>
  <label htmlFor="menu__toggle" className="menu__toggle-label">
    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24' onClick={()=>{return this.props.nav_toggle(false)}}>
      <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
    </svg>
    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24' onClick={()=>{return this.props.nav_toggle(true)}}>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </label>
  <ol className='menu__content' style={{display:this.props.nav_state?'block':'none'}}>
    <li className="menu-item">
      <Link to="/home" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Hogar":"Home"}</Link></li>
    <li className="menu-item">
      <Link to="/" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Intro":"Intro"}</Link></li>
    <li className="menu-item">
      <Link to="/about" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Acerca de":"About"}</Link>
      <ol className="sub-menu">
        <li className="menu-item"><HashLink to="/about#curriculum" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Plan de estudios":"Curriculum"}</HashLink></li>
      <li className="menu-item"><HashLink to="/about#sessions" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Sesiones":"Sessions"}</HashLink></li>
    <li className="menu-item"><HashLink to="/about#cost" onClick={()=>{return this.props.nav_toggle(true)}}>{this.props.useSpanish?"Costo":"Cost"}</HashLink></li>
      </ol>
    </li>
    <li className="menu-item">
     <Contact/>

    </li>
    <li className="menu-item"><a href="/#"  onClick={()=>{alert('Under Construction, Come back another time...')}}>{this.props.useSpanish?"Tienda de deportes":"Sports Store"}</a></li>
  </ol>
</nav>

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
  {nav_toggle}
  )(TopBanner)
