import axios from 'axios'

export const PHOTOS = 'PHOTOS'
export const FORM_MSG = 'FORM_MSG'


 export const photo_defaults = [
  {
    "id": 1,
    "url": "https://thisguycodez.github.io/data/a.jpeg",
    "alt": "me and kids",
  },
  {
    "id": 2,
    "url": "https://thisguycodez.github.io/data/b.jpeg",
    "alt": "me and kids 1",
  },
  {
    "id": 3,
    "url": "https://thisguycodez.github.io/data/c.jpeg",
    "alt": "me and kids 2",
  },
  {
    "id": 4,
    "url": "https://thisguycodez.github.io/data/d.jpeg",
    "alt": "me and kids 3",
  },
  {
    "id": 5,
    "url": "https://thisguycodez.github.io/data/e.jpeg",
    "alt": "me and kids 4",
  }
]







export const get_photos = () => dispatch =>{
	return axios.get(`${process.env.REACT_APP_API}get/photo/`)
		.then(res=>{
			console.log(res.data)
			dispatch({type:PHOTOS,payload:res.data})
		})
		.catch(err=>{
			console.log(err)
			dispatch({type:PHOTOS,payload:photo_defaults})
		})
}











export const contact = (obj,num) => dispatch =>{
  obj.message += `      \n  Phone:${num}`
  return axios.post(`${process.env.REACT_APP_API}contact`,obj)
    .then(res=>{
      console.log(res.data)
      dispatch({type:FORM_MSG,payload:res.data})
    })
    .catch(err=>{
      console.log(err)
      dispatch({type:FORM_MSG,payload:err})
    })
}