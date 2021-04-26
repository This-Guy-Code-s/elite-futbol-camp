import React from 'react'
import {connect} from 'react-redux'

class AbtTxt extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (



  <article className="container content">
  <span className="abt-title"><h1>{this.props.useSpanish?'Sobre nosotros':'About Us'}</h1></span>
   <p>
{this.props.useSpanish?this.props.app_language.about_us_blocks.top.spanish.a:this.props.app_language.about_us_blocks.top.english.a}
  </p>

<hr className="abt"/>


<p> {this.props.useSpanish?this.props.app_language.about_us_blocks.top.spanish.b1:this.props.app_language.about_us_blocks.top.english.b1}<a href='tel://+17038612400' style={{WebkitTextFillColor:'blue'}}>(703)-861-2400</a> {this.props.useSpanish?this.props.app_language.about_us_blocks.top.spanish.b2:this.props.app_language.about_us_blocks.top.english.b2}</p>
</article>







)
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
  )(AbtTxt)


