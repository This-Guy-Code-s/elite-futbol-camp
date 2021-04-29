import React from 'react'
import {connect} from 'react-redux'
import SlimCard from './SlimCard'



class Stock extends React.Component{
  constructor(props){
    super(props)
    this.state={
      test:[
        {
          title:'Quant olap shirts',
          ratings:'310',
          desc:`100% cotton,Light weight, Best finish Unique design For men, Casual`,
          price:'13.99',
          main_price:'20.99',
          img:"https://i.imgur.com/QpjAiHq.jpg"
        },

        {
          title:'Quant olap shirts',
          ratings:'310',
          desc:`100% cotton,Light weight, Best finish Unique design For men, Casual`,
          price:'13.99',
          main_price:'20.99',
          img:"https://i.imgur.com/JvPeqEF.jpg"
        },

        {
          title:'Quant olap shirts',
          ratings:'310',
          desc:`100% cotton,Light weight, Best finish Unique design For men, Casual`,
          price:'13.99',
          main_price:'20.99',
          img:"https://i.imgur.com/Bf4dIaN.jpg"
        },

        {
          title:'Quant olap shirts',
          ratings:'310',
          desc:`100% cotton,Light weight, Best finish Unique design For men, Casual`,
          price:'13.99',
          main_price:'20.99',
          img:"https://i.imgur.com/HO8e9b8.jpg"
        }
      ]
    }
  }




  render(){
    return (
      <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
          <div className="col-md-10">

            {
              this.state.test.map((obj,i)=>{
                return <SlimCard
                key={i}
                title={obj.title}
                ratings={obj.ratings}
                desc={obj.desc}
                price={obj.price}
                main_price={obj.main_price}
                img={obj.img}
                />
              })
            }



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
mapStateToProps
,
  {}
)(Stock)
