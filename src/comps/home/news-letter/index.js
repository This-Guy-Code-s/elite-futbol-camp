 import React from 'react'
import {connect} from 'react-redux'
import '../../../util/styles/css/news-letter.css'
import {subscribing,clear_sub} from '../../../redux/actions'

class NewsLetter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
    }
    this.subscribe=this.subscribe.bind(this)
  }

subscribe(e){
  e.preventDefault()
this.props.subscribing(this.state.email)

    setTimeout(()=>{
        this.setState({email:''})
        e.target.reset()
        return this.props.clear_sub()
    },5000)
  }




  render(){
    return (
<div className="newsletter">
        <div className="container nl-container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="content">
                        <form onSubmit={this.subscribe}>
                            <h6 className="form_msg-1"><code><b>{this.props.sub_form_response?this.props.sub_msg:""}</b></code></h6>
                            <div className="input-group">
                                <input type="email" className="form-control nl-inp" vlaue={this.state.email} onChange={(e)=>{return this.setState({email:e.target.value})}} placeholder={this.props.useSpanish?"Envíe un correo electrónico aquí...":"Email Here..."} minLength={10} required/>
                                <span className="input-group-btn">
                                    <button className="btn" type="submit">{this.props.useSpanish?"Suscríbase":"Subscribe"}</button>
                                </span>
                            </div>
                        </form>
                        <h4>{this.props.useSpanish?"SUSCRÍBETE A NUESTRO BOLETÍN":"SUBSCRIBE TO OUR NEWSLETTER"}</h4>
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
  {subscribing,clear_sub}
  )(NewsLetter)
