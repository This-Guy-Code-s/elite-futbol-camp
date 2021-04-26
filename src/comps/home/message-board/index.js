 import React from 'react'
import {connect} from 'react-redux'
import '../../../util/styles/css/message-board.css'
import {toggle_msg_board} from '../../../redux/actions'
import MsgBrdSub from './Msg-brd-subject'


class MessageBoard extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
  <div className="container-fluid cfx">
   <div className="card mb-card" style={{
    '--screen-width': this.props.msg_board_state?'100%':'70vw',
  '--screen-height': this.props.msg_board_state?'130vh':'20vh',
  'zIndex':this.props.msg_board_state?'3':'1'
   }}>
  <input type="checkbox" id="nav" className="nav-opener" />
  <div className="mb-nav">
    <div className="nav-header">
      <div className="nav-title">{this.props.useSpanish?"Tablero de mensajes":"Message Board"}</div>
      <label className="btn mb-btn btn-nav" htmlFor="nav" onClick={()=>{return this.props.toggle_msg_board(this.props.msg_board_state)}}>
        <svg style={{width:'36px',height:'36px'}} viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
        </svg>
      </label>
    </div>
    <input type="radio" name="image" id="image1" className="nav-link-opener" defaultChecked="checked" />
    <input type="radio" name="image" id="image2" className="nav-link-opener" />
    <input type="radio" name="image" id="image3" className="nav-link-opener" />
    <input type="radio" name="image" id="image4" className="nav-link-opener" />
    <input type="radio" name="image" id="image5" className="nav-link-opener" />
    <input type="radio" name="image" id="image6" className="nav-link-opener" />
    <input type="radio" name="image" id="image7" className="nav-link-opener" />
    <input type="radio" name="image" id="image8" className="nav-link-opener" />
    <input type="radio" name="image" id="image9" className="nav-link-opener" />
    <input type="radio" name="image" id="image10" className="nav-link-opener" />
    <ul className="nav-links">
      <li className="nav-link"><label htmlFor="image1">{this.props.useSpanish?'Niños':'Kids'}</label></li>
      <li className="nav-link"><label htmlFor="image2">{this.props.useSpanish?'Padres':'Parents'}</label></li>
      <li className="nav-link"><label htmlFor="image3">{this.props.useSpanish?'Información de la empresa':'Company Information'}</label></li>
      <li className="nav-link"><label htmlFor="image4">{this.props.useSpanish?'Servicio de información':'Service Information'}</label></li>
      <li className="nav-link"><label htmlFor="image5">{this.props.useSpanish?'Eventos':'Events'}</label></li>
      <li className="nav-link"><label htmlFor="image6">{this.props.useSpanish?'Tiempo libre':'Time Off'}</label></li>
    </ul>
    <div className="nav-images">

      <div className="nav-image image-1">
      <MsgBrdSub subject={'kids'}/>
      </div>

      <div className="nav-image image-2">
      <MsgBrdSub subject={'parents'}/>
      </div>

      <div className="nav-image image-3">
      <MsgBrdSub subject={'company'}/>
      </div>

      <div className="nav-image image-4">
      <MsgBrdSub subject={'service'}/>
      </div>

      <div className="nav-image image-5">
      <MsgBrdSub subject={'events'}/>
      </div>

      <div className="nav-image image-6">
       <MsgBrdSub subject={'timeoff'}/>
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
  {toggle_msg_board}
  )(MessageBoard)
