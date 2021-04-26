
import React, { useState } from 'react';
import {Modal, ModalHeader } from 'reactstrap';
import {connect} from 'react-redux'
import '../../util/styles/sass/contact.scss'
import Form from './Form'


const Contact = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);




  return (
    <div className='modal-x'>
       <span onClick={toggle}>{props.useSpanish?"Contacto":"Contact"}</span>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode=''>{props.contact_msg_state?props.contact_msg:''}<i className="fas fa-eye-slash"></i></ModalHeader>

        <Form />
<p className="result-message centered">Thank you for your message</p>       
     
      </Modal>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
  ...state,
  }
}



export default connect(
  mapStateToProps,
  {}
  )(Contact);
