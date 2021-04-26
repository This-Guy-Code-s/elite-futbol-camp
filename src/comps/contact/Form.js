import React from 'react'
import {ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import {contact} from '../../redux/actions'



class Form extends React.Component{
	constructor(props){
		super(props)
		 //state vars for contact form below
		this.state={
      name:'',
      email:'',
      phone:'',
      msg:''
		}

		this.send_contact=this.send_contact.bind(this)
	}


  //sending contact info now...
  send_contact(e){
    e.preventDefault()
  document.querySelector('.cf').classList.add("sent");
    return this.props.contact(this.state)
  }

	render(){
		return (


        <ModalBody className="contact-modal">

<div className="wrapper centered cf">
  <form onSubmit={this.send_contact} className="letter">
    <div className="side">
      <h1>Contact us</h1>
      <p>
        <textarea placeholder="Your message" minLength={10} value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} required></textarea>
      </p>
    </div>
    <div className="side">
      <p>
        <input type="text" placeholder="Your name" minLength={3} value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} required/>
      </p>
       <p>
        <input type="text" placeholder="Your Phone" minLength={10} value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}} required/>
      </p>
      <p>
        <input type="email" placeholder="Your email" minLength={10} value={this.state.msg} onChange={(e)=>{this.setState({msg:e.target.value})}} required/>
      </p>
      <p>
        <button id="sendLetter" type='submit'>Send</button>
      </p>
    </div>
  </form>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
 </ModalBody>


			)
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
	)(Form)