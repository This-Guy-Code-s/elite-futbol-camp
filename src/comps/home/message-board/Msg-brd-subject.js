import React from 'react'
import {connect} from 'react-redux'



class MsgBrdSub extends React.Component{
 constructor(props){
   super(props)
   this.state={
     len:0
   }
   this.flip_through_msgs=this.flip_through_msgs.bind(this)
 }

 flip_through_msgs(x){
   //last items index
   let last_index = this.props.app_language.msg_board_blocks[this.props.subject].length-1
   if(x<0){//moving left

     if(this.state.len<=0)//is it the 1st item
         return false
   }
   else{//moving right
     if(this.state.len>=last_index)
     //is it the last item
   return false
 }
 //make the change if any(flip to requested msg)
 return this.setState({len:this.state.len + x})
}




 render(){
   return (

      <div className="row row-msg-b">

       <div className="col-sm-12 col-md-12">

         <button className='btn msg-brd-next-toggle-btns' onClick={()=>{return this.flip_through_msgs(-1)}}>
       <i className='fas fa-angle-double-left'></i>
     <i className='fas fa-caret-left'></i>
 </button>
 {" "}
   <button className='btn msg-brd-next-toggle-btns' onClick={()=>{return this.flip_through_msgs(1)}}>
     <i className='fas fa-caret-right'></i>
 <i className='fas fa-angle-double-right'></i>
</button>

          {
            this.props.app_language.msg_board_blocks[this.props.subject].length>0?(

              <div className={`alert-message alert-message-${/covid/gi.test(this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].english.title)?'danger':'info'}`}>
               <h4>
                   {this.props.useSpanish?
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].spanish.title:
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].english.title
                   }</h4>
               <small><b>{this.props.useSpanish?'Activo cuando?':'Active when?'}{this.props.useSpanish?
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].spanish.active_when:
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].english.active_when
                   }</b></small>
               <p>
                {this.props.useSpanish?
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].spanish.msg:
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].english.msg
                   }
                 </p>
               <small><b>{this.props.useSpanish?'Al corriente':'Posted'}:{this.props.useSpanish?
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].spanish.posted:
                   this.props.app_language.msg_board_blocks[this.props.subject][this.state.len].english.posted
                   }</b></small>
           </div>



                          ):<h3>{this.props.useSpanish?"No hay mensajes para esta sección ...":"There Is No Messages For This Section..."}</h3>
             }
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
 )(MsgBrdSub)
