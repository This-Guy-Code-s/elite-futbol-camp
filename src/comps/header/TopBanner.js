 import React from 'react'
import {connect} from 'react-redux'


class TopBanner extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (

<div id="masthead" className="masthead">  
  <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1>{this.props.useSpanish?"bienvenida!":"Welcome!"}
            <p className="lead">{this.props.useSpanish?this.props.app_language.home['top-banner'].spanish['welcome-msg']:this.props.app_language.home['top-banner'].english['welcome-msg']}</p>
          </h1>
        </div>
        <div className="col-md-5">
            <div className="well well-lg"> 
              <div className="row">
                <div className="col-sm-5 imghx">
                  <img src={this.props.montiel} className="img-responsive" alt='elitefutbolcamp.org' width='100' height='90'/>
                </div>
                <div className="col-sm-7">
                  <strong>{this.props.useSpanish?"Trabajo en equipo!":"Team Work!"}</strong>
                    <p>{this.props.useSpanish?this.props.app_language.home['top-banner'].spanish['team-work-msg']:this.props.app_language.home['top-banner'].english['team-work-msg']}</p>
                </div>
              </div>
            </div>
        </div>
      </div> 
  </div>
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
  )(TopBanner)


