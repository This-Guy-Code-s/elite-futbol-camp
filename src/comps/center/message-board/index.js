import React from 'react'
// import logo from './logo.svg';
import '../../../util/styles/css/msg-brd.css';
import {connect} from 'react-redux'






class MsgBoard extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
return (


<div className="container-fluid msg-brd">
    <div className="row">
        <div className="col-md-12">
            <div className="panel panel-primary">
            <br/><small><code>Please Check Daily For Anything New With Elite Futbol Camp</code></small>
                <div className="panel-heading">

                    <span className="glyphicon glyphicon-comment"></span> Message Board

                    <div className="btn-group pull-right">
                        <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-chevron-down"></span>
                        </button>

                        <ul className="dropdown-menu slidedown">
                            <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-refresh">
                            </span>Refresh</a></li>
                            <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-ok-sign">
                            </span>Available</a></li>
                            <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-remove">
                            </span>Busy</a></li>
                            <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-time"></span>
                                Away</a></li>
                            <li className="divider"></li>
                            <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-off"></span>
                                Sign Out</a></li>
                        </ul>
                    </div>
                </div>
                <div className="panel-body">
                    <ul className="chat">
                        <li className="left clearfix"><span className="chat-img pull-left">
                            <img src={this.props.tgh} alt="Elite Futbol Camp" className="img-circle" />
                        </span>
                            <div className="chat-body clearfix clearfixx">
                                <div className="header clearfixx">
                                    <strong className="primary-font">Time Off</strong> <small className="pull-right text-muted">
                                        <span className="glyphicon glyphicon-time"></span>active when? <small>Nov 26th-30th 2020</small></small>
                                </div>
                                <p>
                                    Due to the Holiday's, we are off this weekend, meaning there are no sessions taking place. Enjoy Your Holiday Everyone!
                                </p>

                                 <small className="pull-right text-muted">
                                        <span className="glyphicon glyphicon-time"></span>Posted: <small>Nov 23rd 2020</small></small>
                            </div>
                        </li>
                      
                    </ul>
                </div>
             
            </div>
        </div>
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
  )(MsgBoard);








// <div className="container-fluid msg-brd">
//     <div className="row">
//         <div className="col-md-12">
//             <div className="panel panel-primary">
//             <br/><small><code>Please Check Daily For Anything New With Elite Futbol Camp</code></small>
//                 <div className="panel-heading">

//                     <span className="glyphicon glyphicon-comment"></span> Message Board

//                     <div className="btn-group pull-right">
//                         <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
//                             <span className="glyphicon glyphicon-chevron-down"></span>
//                         </button>

//                         <ul className="dropdown-menu slidedown">
//                             <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-refresh">
//                             </span>Refresh</a></li>
//                             <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-ok-sign">
//                             </span>Available</a></li>
//                             <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-remove">
//                             </span>Busy</a></li>
//                             <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-time"></span>
//                                 Away</a></li>
//                             <li className="divider"></li>
//                             <li><a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-off"></span>
//                                 Sign Out</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="panel-body">
//                     <ul className="chat">
//                         <li className="left clearfix"><span className="chat-img pull-left">
//                             <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
//                         </span>
//                             <div className="chat-body clearfix">
//                                 <div className="header">
//                                     <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
//                                         <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
//                                 </div>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
//                                     dolor, quis ullamcorper ligula sodales.
//                                 </p>
//                             </div>
//                         </li>
//                         <li className="right clearfix"><span className="chat-img pull-right">
//                             <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
//                         </span>
//                             <div className="chat-body clearfix">
//                                 <div className="header">
//                                     <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
//                                     <strong className="pull-right primary-font">Bhaumik Patel</strong>
//                                 </div>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
//                                     dolor, quis ullamcorper ligula sodales.
//                                 </p>
//                             </div>
//                         </li>
//                         <li className="left clearfix"><span className="chat-img pull-left">
//                             <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
//                         </span>
//                             <div className="chat-body clearfix">
//                                 <div className="header">
//                                     <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
//                                         <span className="glyphicon glyphicon-time"></span>14 mins ago</small>
//                                 </div>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
//                                     dolor, quis ullamcorper ligula sodales.
//                                 </p>
//                             </div>
//                         </li>
//                         <li className="right clearfix"><span className="chat-img pull-right">
//                             <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
//                         </span>
//                             <div className="chat-body clearfix">
//                                 <div className="header">
//                                     <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>15 mins ago</small>
//                                     <strong className="pull-right primary-font">Bhaumik Patel</strong>
//                                 </div>
//                                 <p>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
//                                     dolor, quis ullamcorper ligula sodales.
//                                 </p>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="panel-footer">
//                     <div className="input-group">
//                         <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
//                         <span className="input-group-btn">
//                             <button className="btn btn-warning btn-sm" id="btn-chat">
//                                 Send</button>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
