import React from 'react'
import {connect} from 'react-redux'
import {choose_gender} from '../../redux/actions'



class Catagory extends React.Component{
  constructor(props){
      super(props)
        this.state={

        }
        this.current_cat=this.current_cat.bind(this)
  }



  current_cat(){
    let cat;
    this.props.catagory==='clothes'?
    cat = ['tshirt','clothes',0]:
    this.props.catagory==='shoes'?
    cat = ['shoe-prints','shoes',1]:
    this.props.catagory==='protection'?
    cat = ['hand-holding-heart','protection',2]:
    this.props.catagory==='misc'?
    cat = ['futbol','misc',3]:
    cat = ['hand-point-up','Pick a Catagory Above',4];


    return cat
  }



  render(){
    // console.log(this.props.catagory,this.props.gender)
    return (
      <div className="container-fluid">
      <div className="card catagory-card card-1">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className={`${this.current_cat()[2]===0?'active':''}`}></li>
                    <li data-target="#demo" data-slide-to="1" className={`${this.current_cat()[2]===1?'active':''}`}></li>
                    <li data-target="#demo" data-slide-to="2" className={`${this.current_cat()[2]===2?'active':''}`}></li>
                    <li data-target="#demo" data-slide-to="3" className={`${this.current_cat()[2]===3?'active':''}`}></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="percentage">&#128203; {this.props.display_stock.length}</div>
                                <div className="catagory">Catagory: {this.current_cat()[1]}</div>
                            </div>

                            <div className="col-6 mb-3"> <i className={`fas fa-${this.current_cat()[0]} img-fluid cat-main-ico`}></i> </div>

                            <div className={`${this.current_cat()[2]<=1?'col-12 mb-3':''} gen-btns`} style={{display:this.current_cat()[2]===4?'none':'block'}}>
                            {this.props.gender==='boys'||this.props.gender==='girls'?['Boys','Girls'].map((gen,i)=>{
                          return <button key={i} className={`btn ${this.props.gender===gen.toLowerCase()?'focus':''} gen-main-picks`} onClick={()=>{return this.props.choose_gender(gen)}}>{gen}</button>
                          }):<button className={`btn ${this.props.gender==='all'?'focus':''} gen-main-picks`} disabled>All</button>

                          }
                             </div>
                        </div>
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
  {choose_gender}
)(Catagory)
