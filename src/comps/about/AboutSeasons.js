import React from 'react'
import {connect} from 'react-redux'

class AboutSeasons extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
<div className="abt-sns-body">
<div className="option-group">
  <div className="option-container container">

    <input className="option-input" defaultChecked id="option-1" type="radio" name="options" />
    <input className="option-input" id="option-2" type="radio" name="options" />
    
    <label className="option" htmlFor="option-1"
    style={{
      background:`url(${this.props.seasons_pix.summer})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
      }}>
      <span className="option__indicator"></span>
      <span className="option__label">
        <sub><i className="fas fa-sun summer-i"></i><small><b>{this.props.useSpanish?'Verano':'Summer'}</b></small></sub>
      </span>
    </label>

    <label className="option" htmlFor="option-2"
    style={{
      background:`url(${this.props.seasons_pix.winter})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
      }}>
      <span className="option__indicator"></span>
      <span className="option__label">
        <sub><i className="fas fa-snowflake winter-i"></i><small><b>{this.props.useSpanish?'Invierno':'Winter'}</b></small></sub>
      </span>
    </label>

  </div>
</div>
<div className="option-group">
  <div className="option-container">

    <input className="option-input" id="option-3" type="radio" name="options" />
    <input className="option-input" id="option-4" type="radio" name="options" />
    
    <label className="option" htmlFor="option-3"
    style={{
      background:`url(${this.props.seasons_pix.spring})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
      }}>
      <span className="option__indicator"></span>
      <span className="option__label">
        <sub><i className="fas fa-cloud-meatball spring-i"></i><small><b>{this.props.useSpanish?'Primavera':'Spring'}</b></small></sub>
      </span>
    </label>

    <label className="option" htmlFor="option-4"
    style={{
      background:`url(${this.props.seasons_pix.fall})`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
      }}>
      <span className="option__indicator"></span>
      <span className="option__label">
        <sub><i className="fab fa-envira fall-i"></i><small><b>{this.props.useSpanish?'Otoño':'Fall'}</b></small></sub>
      </span>
    </label>

  </div>
</div>

</div>





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
  )(AboutSeasons)


