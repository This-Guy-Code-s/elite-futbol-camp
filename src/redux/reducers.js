import heroImage from '../util/imgs/blueBall.jpg'
import mapp from '../util/imgs/map1.png'
import iceBall from '../util/imgs/sb1.png'
import montiel from '../util/imgs/g.jpeg'
import {PHOTOS,photo_defaults,FORM_MSG,LANGO} from './actions'


const initialState = {
	heroImage:heroImage,
	useEnglish:(window.sessionStorage.lango && JSON.parse(window.sessionStorage.lango)) || true,
	photos:photo_defaults,
	map:mapp,
	iceBall:iceBall,
	montiel:montiel,
	contact_response:false,
	sessions:[
	{age_range:'Ages 3-4',date_length:'Nov14 - Dec19',days_and_time:'Sat:12:00pm-1:00pm',requirements:'Includes 6 sessions with 2 coaches',price:'Cost $130.00',includes:{booli:true,text:'with T-Shirt included'}},
	{age_range:'Ages 5-6',date_length:'Nov14 - Dec19',days_and_time:'Sat:9:00am-10:00am',requirements:'Includes 6 sessions with 2 coaches',price:'Cost $130.00',includes:{booli:true,text:'with T-shirts included'}},
	{age_range:'Ages 7-9',date_length:'Nov14 - Dec19',days_and_time:'Sat:10:00am-11:00am',requirements:'Includes 6 sessions with 2 coaches',price:'Cost $130.00',includes:{booli:true,text:'with T-shirts included'}},
	{age_range:'Ages 10-14',date_length:'Nov14 - Dec19',days_and_time:'Sat:11:00am-12:00pm',requirements:'Includes 6 sessions with 2 coaches',price:'Cost $130.00',includes:{booli:true,text:'with T-shirts included'}}

	]

}



const reducer = (state = initialState,action) =>{
	switch(action){
		case PHOTOS:
		return {
			...state,
			photos:action.payload
		}

		case FORM_MSG:
		return {
			...state,
			contact_response:action.payload
		}

		case LANGO:
		return {
			...state,
			useEnglish:action.payload
		}


		default:
		return state
	}
}





export default reducer