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
             <div className="col-6">
                         <ul className="list-unstyled col-xl-12  col-12">
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=kids indoor soccer shoes&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=64bd576d4b3263cde78e5f9e8bf39840'><sub><small>(Gear)</small></sub><br/>Shoes</a></li>
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=espanol kids soccer books&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=69e5d365378d77291624a83c640fb5a6'><sub><small>(Train Your Brain)</small></sub><br/>Books</a></li>
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=kids soccer pads&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=6fb5a77eb6ee17dfe6d98f539bcffd74'><sub><small>(Protection)</small></sub><br/>Shin Gaurds</a></li>
                         </ul>
             
             </div>
             <div className="col-6">
                         <ul className="list-unstyled col-xl-12  col-12">
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=kids soccer pads&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=6fb5a77eb6ee17dfe6d98f539bcffd74'><sub><small>(Protection)</small></sub><br/>Knee Pads</a></li>
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=kids soccer gloves&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=8c549015f1466375f5de9bae1f952694'><sub><small>(Gear)</small></sub><br/>Gloves</a></li>
                             <li><a href='https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thisguycodez-20&keywords=kids soccer&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=6bf98ff64a3eae32b1d79abd01800329'><sub><small>(Equipment)</small></sub><br/>Ball,Goal,Etc.</a></li>
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


