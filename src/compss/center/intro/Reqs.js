import React from 'react'
import {connect} from 'react-redux'


class Requirements extends React.Component{
  constructor(props){
    super(props)
    this.state={
      colors:['primary','danger','info']
    }
  }




  render(){
    return (
<div className="container-fluid">
<div className="row">
    <div className="col-lg-12">
        <div className="card">
            <div className="card-body" id='information'>

                <div className="hori-timeline" dir="ltr">
                  <span><b><u>Must Follow</u></b><br/></span>
                  <span><b><u>Requirements Below </u></b> </span><br/>
                  <span><b><u><i style={{WebkitTextFillColor:'red',color:'red'}}className="fas fa-exclamation-triangle"></i> IN DOOR GEAR ONLY<i style={{WebkitTextFillColor:'red',color:'red'}}className="fas fa-exclamation-triangle"></i></u></b></span><br/> 
                  <br/>
       
                    <ul className="list-inline events">
                    {

                      this.props.reqs.map((req,i)=>{
                        return(

                          <li className="list-inline-item event-list" key={i}>
                            <div className="px-4">
                                <div className={`event-date-x bg-soft-primary text-danger`}>
                                <i className="fas fa-exclamation-triangle"></i><em>{req.title}</em></div>
                                <p className="text-muted">{req.desc}<br/></p>
                                
                            </div>
                        </li>


                          )
                      })  


                    }
                        
                        
                    </ul>
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
  )(Requirements);
