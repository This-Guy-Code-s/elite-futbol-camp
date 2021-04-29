//logo for elitefutbolcamp.org
import logo from '../util/imgs/logo.png'
//location map image for elitefutbolcamp.org
import mapp from '../util/imgs/map.png'
//coach for elitefutbolcamp - name: montiel
import montiel from '../util/imgs/g.jpeg'
//seasons pix
import summer from '../util/imgs/summer.jpg'
import winter from '../util/imgs/winter.jpg'
import spring from '../util/imgs/spring.jpg'
import fall from '../util/imgs/fall.jpg'
//seasons pix
//action type triggers
import {NAV,LANGO,SUBBED,CLR_SUBBED,
	MSG_BOARD,MSG_BOARD_BLOCKS,CONTACT_FORM_MSG,
STORE_CATAGORY,STORE_GENDER,STORE_RENDER_NEW_LIST} from './actions'
// the coacches 'coach Lz' for proof?..
import Lz from '../util/imgs/Lz.jpeg'
import Lz1 from '../util/imgs/Lz1.jpeg'


//language json obj
import language from './language.json'

//store stock in json form
import stock from './store-stock.json'


//redux state
const initialState = {
	nav_state:false,
	// app language currently being used (big blocks of text only)
	app_language:language,
	//english or spanish language trigger
	useSpanish:window.sessionStorage.useSpanish?true:false,

	//images---------------------------------
	montiel:montiel,
	Lz:Lz,
	Lz1:Lz1,
	logo:logo,
	map:mapp,
	//slide show photos
	photos:[
			{"id": 1, "url": "https://thisguycodez.github.io/data/a.jpeg", "alt": "me and kids", "desc": "Elite Futbol"},
			{"id": 2,"url": "https://thisguycodez.github.io/data/b.jpeg", "alt": "me and kids 1", "desc": "Elite Futbol Camp! 1"},
			{"id": 3,"url": "https://thisguycodez.github.io/data/c.jpeg", "alt": "me and kids 2", "desc": "Elite Futbol Camp! 2"},
			{"id": 4,"url": "https://thisguycodez.github.io/data/d.jpeg", "alt": "me and kids 3", "desc": "Elite Futbol Camp! 3"},
			{"id": 5,"url": "https://thisguycodez.github.io/data/e.jpeg", "alt": "me and kids 4", "desc": "Elite Futbol Camp! 4"},
			{"id": 6,"url": "https://thisguycodez.github.io/data/soc-f.jpg", "alt": "me and kids 5", "desc": "Elite Futbol Camp! 5"},
			{"id":7, "url": "https://thisguycodez.github.io/data/soc-h.jpeg", "alt": "me and kids 6", "desc": "Elite Futbol Camp! 6"},
			{"id": 8, "url": "https://thisguycodez.github.io/data/soc-i.jpeg", "alt": "me and kids 7", "desc": "Elite Futbol Camp! 7"},
			{"id": 9, "url": "https://thisguycodez.github.io/data/soc-j.jpeg", "alt": "me and kids 8", "desc": "Elite Futbol Camp! 8"}
		   ],

   	seasons_pix:{
   		summer:summer,
   		winter:winter,
   		spring:spring,
   		fall:fall,
   	},
	//images---------------------------------


	//subscribers form results
	sub_form_response:false,
	sub_msg:"",



	//message board functionality toggle
	msg_board_state:false,


	//contact form trigger response...allows better UX for success msg or error handling
	contact_form_response:false,
	contact_msg:'',




	store_stock:stock,
	catagory:window.sessionStorage.catagory || null,
	gender:window.sessionStorage.gender || null,
	display_stock:[]

}



const reducer = (state = initialState,action) =>{
	switch(action.type){



		case NAV:
		return {
			...state,
			nav_state:action.payload
		}

		case LANGO:
		return {
			...state,
			useSpanish:action.payload
		}


		case SUBBED:
		return {
			...state,
			sub_form_response:true,
			sub_msg:action.payload
		}

		case CLR_SUBBED:
		return {
			...state,
			sub_form_response:false,
			sub_msg:action.payload
		}



		case MSG_BOARD:
		return {
			...state,
			msg_board_state:action.payload
		}

		case MSG_BOARD_BLOCKS:
		return {
			...state,
			msg_board_blocks:action.payload
		}


		case CONTACT_FORM_MSG:
		return {
			...state,
			contact_msg:action.payload
		}


		case STORE_CATAGORY:
		return {
			...state,
			catagory:action.payload
		}


		case STORE_GENDER:
		return {
			...state,
			gender:action.payload
		}

		case STORE_RENDER_NEW_LIST:
		return {
			...state,
			display_stock:action.payload
		}
		default:
		return state
	}
}





export default reducer
