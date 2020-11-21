import React from 'react'
import '../../../util/styles/css/intro.css';
import {connect} from 'react-redux'
import Curriculum from './curriculum/'
import Reqs from './Reqs'
import Covid from './Covid'
import {Button} from 'reactstrap'



class Intro extends React.Component{
  constructor(props){
    super(props)
    this.state={
      colors:['primary','danger','info']
    }

    this.youTube=this.youTube.bind(this)
  }

  youTube(){
    return window.location.href='https://www.youtube.com/channel/UCLXmNPolY3m5b9PTc55IPww/featured?view_as=subscriber'
  }


  render(){
    return (
<div className="container-fluid">
<div className="row">
    <div className="col-lg-12">
        <div className="card">
            <div className="card-body" id='information'>
                <Button color='info' className="card-title mb-5 soccer-btn soccer-a" style={{fontFamily:'oblique',fontWeight:'bolder'}} onClick={this.youTube}>Virtual Live Sessions</Button>
                <h2 className="card-title mb-5 sec-title" style={{fontFamily:'oblique',fontWeight:'bolder'}}>Our Scheduled Sessions</h2>

                <div className="hori-timeline" dir="ltr">
                  <span><b><u>Coaches:</u></b><br/> <small>Montiel and Barrios</small></span><br/>
                  <span><b><u>Assistant:</u></b><br/> <small>Lozano</small></span>
                  <br/>
           
                    <ul className="list-inline events">
                    {

                      this.props.sessions.map((sesh,i)=>{
                        return(

                          <li className="list-inline-item event-list" key={i}>
                            <div className="px-4">
                                <div className={`event-date bg-soft-primary text-${this.state.colors[i]?this.state.colors[i]:this.state.colors[Math.floor(Math.random() * this.state.colors.length)]}`}>
                                <i className="fas fa-futbol sb"></i><em>{sesh.age_range}</em></div>
                                <h5 className="font-size-16">{sesh.date_length}</h5>
                                <h5 className="font-size-16">{sesh.days_and_time}</h5>
                                <p className="text-muted">{sesh.requirements}<br/>{sesh.price}<br/>{sesh.includes.booli?sesh.includes.text:null}<br/></p>
                                
                            </div>
                        </li>


                          )
                      })  


                    }
                        
                        
                    </ul>

                           <div className="px-5">
          
                  
<span style={{WebkitTextFillColor:'red',fontWeight:'bolder'}}>
Follow this schedule unless told otherwise by coach to come at a different time.
</span>
</div>
                </div>
            </div>
        </div>
    </div>
</div>

       <Reqs/>
      <Covid/>
      <Curriculum />

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
  )(Intro);
