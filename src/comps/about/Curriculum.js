import React from 'react'
import {connect} from 'react-redux'

class Curriculum extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
  <article className="container content">
  <span className="abt-title" id='curriculum'><h3>{this.props.useSpanish?'Nuestro plan de estudios':'Our Curriculum'}</h3></span>
   <p>
   {this.props.useSpanish?this.props.app_language.about_us_blocks.cur.spanish.a:this.props.app_language.about_us_blocks.cur.english.a}
 </p>

<hr className="abt"/>
<div className="tabs">
  <div className="tab-2" >
    <label htmlFor="tab2-1">{this.props.useSpanish?'Individual':'Individual'}</label>
    <input  className='cur' id="tab2-1" name="tabs-two" type="radio" defaultChecked="checked" />
    <div>
      <h4>{this.props.useSpanish?'Habilidades individuales':'Individual Skills'}</h4>
         <div className="col-lg-6" >
                <div className="timeline p-4 block mb-4" >
                    <div className="tl-item active">
                        <div className="tl-dot b-warning"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Regate':'Dribbling'}</div>
                        </div>
                    </div>
                    <div className="tl-item">
                        <div className="tl-dot b-primary"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Paso':'Passing'}</div>
                        </div>
                    </div>
                   <div className="tl-item">
                        <div className="tl-dot b-danger"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Recepción':'Receiving'}</div>
                        </div>
                    </div>

                </div>
            </div>
       </div>
  </div>
  <div className="tab-2">
    <label htmlFor="tab2-2">{this.props.useSpanish?'Equipo':'Team'}</label>
    <input  className='cur' id="tab2-2" name="tabs-two" type="radio" />
    <div>
      <h4>{this.props.useSpanish?'Habilidades de equipo':'Team Skills'}</h4>
            <div className="col-lg-6">
                <div className="timeline p-4 block mb-4">
                          <div className="tl-item active">
                        <div className="tl-dot b-warning"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Defendiendo':'Defending'}</div>
                        </div>
                    </div>
                     <div className="tl-item">
                        <div className="tl-dot b-danger"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Juego combinado':'Combination Play'}</div>
                        </div>
                    </div>

                    <div className="tl-item">
                        <div className="tl-dot b-primary"></div>
                        <div className="tl-content">
                            <div className="">{this.props.useSpanish?'Disparo y remate':'Shooting and Finishing'}</div>
                        </div>
                    </div>

                </div>
            </div>
       </div>
  </div>
</div>
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
  )(Curriculum)
