import {Component} from 'react';
import {connect} from 'react-redux'



class Mapp extends Component {


  render() {
    return (
      <figure>
      <img className='img img-thumbnail mapx' src={this.props.map} alt='elite futbol camp' onClick={()=>{window.open('https://www.google.com/maps/place/K+Sports+Complex/@38.7374887,-77.5275404,17z','_blank')}}/>
      </figure>
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
  {}

  )(Mapp)
