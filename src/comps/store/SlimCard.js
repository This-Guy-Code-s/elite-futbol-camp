import React from 'react'




class SlimCard extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){
    return (


      <div className="row p-2 bg-white border rounded">
          <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={this.props.img} alt='elitefutbolcamp.org'/></div>
          <div className="col-md-6 mt-1">
              <h5>{this.props.title}</h5>
              <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                {Array(Number(this.props.ratings[0]))}
                  </div><span>{this.props.ratings}</span>
              </div>
              <div className="mt-1 mb-1 spec-1"></div>
              <div className="mt-1 mb-1 spec-1"></div>
              <p className="text-justify text-truncate para mb-0">{this.props.desc}<br/><br/></p>
          </div>
          <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">${this.props.price}</h4><span className="strike-text">${this.props.main_price}</span>
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
          </div>
      </div>

    )
  }
}


export default SlimCard
