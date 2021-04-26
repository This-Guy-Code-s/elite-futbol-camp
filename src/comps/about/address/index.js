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
Phone <a href="tel:7036812400">(703)-861-2400</a>.<br/>
Email: <a href="mailto:elitefutbolmontiel@gmail.com">elitefutbolmontiel@gmail.com</a><br/>
Address:<br/>
K Sport Complex<br/>
10103 residency rd. <br/>
manassas va<br/>
20110, USA
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
