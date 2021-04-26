 import React from 'react'
import {connect} from 'react-redux'



class SportsStore extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
     <footer>

     </footer>

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
  )(SportsStore)


