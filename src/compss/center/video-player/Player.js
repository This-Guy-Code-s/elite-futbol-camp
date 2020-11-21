import React from 'react'
import ReactPlayer from 'react-player'
 
// Render a YouTube video player



class Player extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}


	}






	render(){
		return (

			<ReactPlayer
			 url={this.props.url}
			 volume={1}
			 width={window.innerWidth<700?'100%':'560px'}
			 />


			)
	}
}



export default Player