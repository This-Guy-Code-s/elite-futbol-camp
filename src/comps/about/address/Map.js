import {Component} from 'react';
import {connect} from 'react-redux'



class Mapp extends Component {


  render() {
    return (
      <figure>
      <img className='img img-thumbnail' src={this.props.map} alt='elite futbol camp'/>
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
