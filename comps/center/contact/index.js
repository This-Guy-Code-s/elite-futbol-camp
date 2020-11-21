import React from 'react'
import {connect} from 'react-redux'
import '../../../util/styles/css/form.css'
import {contact} from '../../../redux/actions'



class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state={
      obj:{
        name:'',
      email:'',
      message:''
      },
      phone:''
      
    }

    this.updateState=this.updateState.bind(this)
    this.checker=this.checker.bind(this)
  }



  checker(){
        this.setState({
            obj:{
        name:'',
      email:'',
      message:''
      },
      phone:''
        })
  }


  updateState(e,str){
    return this.setState({obj:{...this.state.obj,[str]:e.target.value}})
  }


componentDidUpdate(){
}

  render(){
    return (
<div className="container">
<h2 className="card-title mb-5 sec-title" style={{fontFamily:'oblique',fontWeight:'bolder'}}><img src={this.props.montiel} alt='Montiel' width='30' height='30' className='montiel'/>Contact Coach Montiel</h2>
 <div className="registration-form">
        <form onSubmit={(e)=>{e.preventDefault();this.props.contact(this.state.obj,this.state.phone);return this.checker()}} id='formz'>
            <div className="form-icon">
                <span className='icon icon-user'><img src={this.props.iceBall} alt='Montiel' width='65' height='65' /></span>
            </div>
                <h6><small><code><b>{typeof this.props.contact_response=='string'?this.props.contact_response:true}</b></code></small></h6>

            <div className="form-group">
                <input type="text" className="form-control item" id="username" placeholder="Name" minLength={3} value={this.state.obj.name} onChange={(e)=>{return this.updateState(e,'name')}} required/>
            </div>
         
            <div className="form-group">
                <input type="email" className="form-control item" id="email" placeholder="Email" minLength={6} value={this.state.obj.email} onChange={(e)=>{return this.updateState(e,'email')}} required/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" minLength={10} value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}} required/>
            </div>

              <div className="form-group">
                <textarea type="text" className="form-control item" id="msg" placeholder="Message" minLength={8} value={this.state.obj.message} onChange={(e)=>{return this.updateState(e,'message')}} required/>
            </div>
         
            <div className="form-group">
                <button type="submit" className="btn btn-block create-account">Send</button>
            </div>
        </form>
     
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
  mapStateToProps,
  {contact}
  )(Contact);
