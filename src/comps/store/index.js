import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Header from './header'
import Catagory from './Catagory'
import Stock from './Stock'
import '../../util/styles/css/store-header.css'
import '../../util/styles/css/store-catagory.css'

class SportsStore extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
    this.go_back=this.go_back.bind(this)
  }

  go_back(){
    return this.props.history.goBack()
  }


  render(){
    return (
     <div className="container-fluid Store">
     <Header go_back={this.go_back}/>
     <Catagory/>
     <Stock/>
     </div>
    );
  }
}




const mapStateToProps = state =>{
   return {
    ...state
   }
}


export default withRouter(connect(
mapStateToProps
,
  {}
  )(SportsStore)
)
