import {Component} from 'react';
import Mapp from './Map'
import {connect} from 'react-redux'

class Address extends Component {
constructor(props){
  super(props)
  this.state={}
}


  render() {
    return (
     <div>
     <address>
{this.props.useSpanish?'Teléfono':'Phone'}: <a href="tel:7036812400">(703)-861-2400</a>.<br/>
{this.props.useSpanish?'Correo electrónico':'Email'}: <a href="mailto:elitefutbolmontiel@gmail.com">elitefutbolmontiel@gmail.com</a><br/>
{this.props.useSpanish?'Habla a':'Address'}:<br/>
{this.props.useSpanish?'Complejo deportivo K':'K Sport Complex'}<br/>
{this.props.useSpanish?'10103 residencia rd.':'10103 residency rd.'}<br/>
{/*SPANISH & ENGLISH RETURNS THE SAME HERE.. >>*/}manassas va<br/>
{this.props.useSpanish?'20110, EE. UU.':'20110, USA'}
</address>
<Mapp/>
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
  )(Address)
