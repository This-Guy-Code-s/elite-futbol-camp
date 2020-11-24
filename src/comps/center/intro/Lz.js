import React from 'react'
import {connect} from 'react-redux'

class Lz extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){




return (

  <div className="container Lz" >

      <div className="un-photo__popup">
        <img className='img img-thumbnail' src={this.props.Lz} alt='Elite Futbol Camp'/>
        <img className='img img-thumbnail' src={this.props.Lz1} alt='Elite Futbol Camp'/>
      </div>
</div>

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
  {}
  )(Lz);























