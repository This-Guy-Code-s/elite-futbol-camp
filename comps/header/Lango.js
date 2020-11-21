import React from 'react'
import Switch from "react-switch";
import {connect} from 'react-redux'
import {toggle_lango} from '../../redux/actions'



class Lango extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
 
 
 componentDidUpdate(){
    console.log(this.props.useEnglish)

 }
  render() {
    return (
      <label style={{display:'none'}}>
        <span>English or Spanish {!this.props.useEnglish?'Spanish':'English'}</span>
    <br/>
        <Switch onChange={this.props.toggle_lango} checked={this.props.useEnglish || false} />
      </label>
    );
  }
}


const mapStateToProps = state =>{
   return {
    useEnglish:state.useEnglish
   }
}


export default connect(
mapStateToProps
,
  {toggle_lango}
  )(Lango)
