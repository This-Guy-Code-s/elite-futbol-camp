 import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/'
import NewsLetter from './news-letter/'
import MessageBoard from './message-board/'


class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
     <div className='container-fluid home-page'>

     <Header/>


   <NewsLetter/>

   <MessageBoard/>

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
  )(HomePage)
