 import React from 'react'
import '../../util/styles/css/footer.css';
import Payments from './Payments'
import {connect} from 'react-redux'



class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (
      <div className="container-fluid footer-container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div className="row my-5 justify-content-center py-5">
             <div className="col-12">
                 <div className="row ">
                     <div className="col-xl-6 col-md-4 col-sm-4 col-12 my-auto mx-auto a pay-box">
                         <h3 className="text-muted mb-md-0 mb-5 bold-text">Payments We Accept.</h3>
                     <Payments/>

                     </div>
                     <div className="col-xl-6 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 bold-text "><b>Payments</b></h6>
                         <ul className="list-unstyled">
                             <li>Apple Pay</li>
                             <li>Venmo</li>
                             <li>PayPal</li>
                             <li>CashApp</li>
                             <li>Zelle</li>
                             <li>Cash</li>
                         </ul>
                     </div>
                     
                 </div>
                
             </div>
             <div className="col-12">
                         <ul className="list-unstyled col-xl-12  col-12">
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=herbi02-20&keywords=kids indoor soccer shoes&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=f0bc1d6f73e2b4ea2f9176d1db5ef670'><sub><small>(Good For Indoors)</small></sub><br/>Kids Soccer Shoes</a></li>
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=herbi02-20&keywords=kids soccer books&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=f8d2d54dbcd8911c17fdccb79424f6be'><sub><small>(Train Your Brain)</small></sub><br/>Kids Soccer Books</a></li>
                         </ul>
             
             </div>
         </div>
     </footer>
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
mapStateToProps
,
  {}
  )(Footer)


