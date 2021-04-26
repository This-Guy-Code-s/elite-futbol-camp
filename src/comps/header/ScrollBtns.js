 import React from 'react'
import {connect} from 'react-redux'
import {toggle_lango} from '../../redux/actions'

class ScrollBtns extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (

  <div className="container-fluid scroll-btn-main" >
  <div className="text-center scroll-btn-main-text">

    <div className="scroll-btn-c2a-btn footer-c2a-btn" >
      <div className="scroll-btn-btn-group scroll-btn-btn-group-lg" role="group" aria-label="Call to action">
        <span className="scroll-btn-btn-circle scroll-btn-btn-or btn" onClick={this.props.toggle_lango} >{this.props.useSpanish?"English?":"Española?"}</span>
      </div>
    </div>
  </div>
</div>

    );
  }
}




const mapStateToProps = state =>{
   return {
    useSpanish:state.useSpanish
   }
}


export default connect(
mapStateToProps
,
  {toggle_lango}
  )(ScrollBtns)
