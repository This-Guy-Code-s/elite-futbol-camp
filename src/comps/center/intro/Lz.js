import React from 'react'
// import logo from './logo.svg';
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
        <img className='img img-thumbnail' src={this.props.Lz} />
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























