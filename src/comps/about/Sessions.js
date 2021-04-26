 import React from 'react'
import {connect} from 'react-redux'
import TabFunctions from './util'

class Sessions extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


componentDidMount(){
TabFunctions()
}

  render(){


    return ( 
      <div className="container container-sessions">
  <span className="abt-title"><h3>{this.props.useSpanish?'Sesiones programadas':'Scheduled Sessions'}</h3></span>
  <p>
{this.props.useSpanish?'Nuestras últimas Sesiones ...':'Our latest Sessions....'}
  </p>
      <section className="accordion">
    <section className="accordion-tabs">
      <button className="accordion-tab accordion-active" data-actab-group="0" data-actab-id="0"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'3-4 años':'Ages 3-4'}</button>
      <button className="accordion-tab" data-actab-group="0" data-actab-id="1"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'5-6 años':'Ages 5-6'}</button>
      <button className="accordion-tab" data-actab-group="0" data-actab-id="2"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'7-9 años':'Ages 7-9'}</button>
      <button className="accordion-tab" data-actab-group="0" data-actab-id="3"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'10-14 años':'Ages 10-14'}</button>
    </section>
    <section className="accordion-content">
      <article className="accordion-item accordion-active" data-actab-group="0" data-actab-id="0">
        <h4 className="accordion-item__label"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'10-14 años':'Ages 3-4'}
</h4>
        <div className="accordion-item__container">
          <p>
            
          <b>{this.props.useSpanish?'14 de noviembre - 19 de diciembre':'Nov14 - Dec19'}</b><br/>
<b>{this.props.useSpanish?'Sábado:12:00pm - 1:00pm':'Sat:12:00pm-1:00pm'}</b><br/>

<em>{this.props.useSpanish?'Incluye 6 sesiones con 2 entrenadoras.':'Includes 6 sessions with 2 coaches'}<br/>
<b>{this.props.useSpanish?'Costo $ 130.00':'Cost $130.00'}</b><br/>
{this.props.useSpanish?'con camiseta incluida':'with T-Shirt included'}</em>

          </p>
        </div>
      </article>
      <article className="accordion-item" data-actab-group="0" data-actab-id="1">
        <h4 className="accordion-item__label"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'10-14 años':'Ages 5-6'}</h4>
        <div className="accordion-item__container">
          <p>
            
          <b>{this.props.useSpanish?'14 de noviembre - 19 de diciembre':'Nov14 - Dec19'}</b><br/>
<b>{this.props.useSpanish?'Sábado:9:00am - 10:00am':'Sat:9:00am-10:00am'}</b><br/>

<em>{this.props.useSpanish?'Incluye 6 sesiones con 2 entrenadoras.':'Includes 6 sessions with 2 coaches'}<br/>
<b>{this.props.useSpanish?'Costo $ 130.00':'Cost $130.00'}</b><br/>
{this.props.useSpanish?'con camiseta incluida':'with T-Shirt included'}</em>

          </p>
        </div>
      </article>
      <article className="accordion-item" data-actab-group="0" data-actab-id="2">
        <h4 className="accordion-item__label"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'10-14 años':'Ages 7-9'}</h4>
         <div className="accordion-item__container">
          <p>
            
          <b>{this.props.useSpanish?'14 de noviembre - 19 de diciembre':'Nov14 - Dec19'}</b><br/>
<b>{this.props.useSpanish?'Sábado:10:00am - 11:00am':'Sat:10:00am-11:00am'}</b><br/>

<em>{this.props.useSpanish?'Incluye 6 sesiones con 2 entrenadoras.':'Includes 6 sessions with 2 coaches'}<br/>
<b>{this.props.useSpanish?'Costo $ 130.00':'Cost $130.00'}</b><br/>
{this.props.useSpanish?'con camiseta incluida':'with T-Shirt included'}</em>

          </p>
        </div>
      </article>
      <article className="accordion-item" data-actab-group="0" data-actab-id="3">
        <h4 className="accordion-item__label"><i className="fas fa-futbol sb"></i>{this.props.useSpanish?'10-14 años':'Ages 10-14'}</h4>
         <div className="accordion-item__container">
          <p>
            
          <b>{this.props.useSpanish?'14 de noviembre - 19 de diciembre':'Nov14 - Dec19'}</b><br/>
<b>{this.props.useSpanish?'Sábado:11:00am - 12:00pm':'Sat:11:00am-12:00pm'}</b><br/>

<em>{this.props.useSpanish?'Incluye 6 sesiones con 2 entrenadoras.':'Includes 6 sessions with 2 coaches'}<br/>
<b>{this.props.useSpanish?'Costo $ 130.00':'Cost $130.00'}</b><br/>
{this.props.useSpanish?'con camiseta incluida':'with T-Shirt included'}</em>

          </p>
        </div>
      </article>
      
    </section>
  </section>
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
  )(Sessions)


