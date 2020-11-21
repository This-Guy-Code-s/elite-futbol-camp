import React from 'react'
import {connect} from 'react-redux'
import '../../../../util/styles/css/curriculum.css'

class Curriculum extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }




  render(){
    return (
<div className="container">
<h2 className="card-title mb-5 sec-title" style={{fontFamily:'oblique',fontWeight:'bolder'}}>Our Curriculum</h2>
<div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row">
            <div className="col-lg-6">
                <p className='event-date bg-soft-primary text-primary'>Individual Skills</p>
                <div className="timeline p-4 block mb-4">
                    <div className="tl-item active">
                        <div className="tl-dot b-warning"></div>
                        <div className="tl-content">
                            <div className="">Dribbling</div>
                        </div>
                    </div>
                    <div className="tl-item">
                        <div className="tl-dot b-primary"></div>
                        <div className="tl-content">
                            <div className="">Passing</div>
                        </div>
                    </div>
                   <div className="tl-item">
                        <div className="tl-dot b-danger"></div>
                        <div className="tl-content">
                            <div className="">Receiving</div>
                        </div>
                    </div>
                  
                </div>
            </div>


            <div className="col-lg-6">
                <p className='event-date bg-soft-primary text-primary'>Team Skills</p>
                <div className="timeline p-4 block mb-4">
                          <div className="tl-item active">
                        <div className="tl-dot b-warning"></div>
                        <div className="tl-content">
                            <div className="">Defending</div>
                        </div>
                    </div>
                     <div className="tl-item">
                        <div className="tl-dot b-danger"></div>
                        <div className="tl-content">
                            <div className="">Combination Play</div>
                        </div>
                    </div>
                    
                    <div className="tl-item">
                        <div className="tl-dot b-primary"></div>
                        <div className="tl-content">
                            <div className="">Shooting and Finishing</div>
                        </div>
                    </div>
                  
                </div>
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
  mapStateToProps,
  {}
  )(Curriculum);
