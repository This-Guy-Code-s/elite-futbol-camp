import axios from 'axios'

export const PHOTOS = 'PHOTOS'
export const FORM_MSG = 'FORM_MSG'
export const LANGO = 'LANGO'


 export const photo_defaults = [{"id": 1, "url": "https://thisguycodez.github.io/data/a.jpeg", "alt": "me and kids", "desc": "Elite Futbol"}, {"id": 2,
"url": "https://thisguycodez.github.io/data/b.jpeg", "alt": "me and kids 1", "desc": "Elite Futbol Camp! 1"}, {"id": 3,
"url": "https://thisguycodez.github.io/data/c.jpeg", "alt": "me and kids 2", "desc": "Elite Futbol Camp! 2"}, {"id": 4,
"url": "https://thisguycodez.github.io/data/d.jpeg", "alt": "me and kids 3", "desc": "Elite Futbol Camp! 3"}, {"id": 5,
"url": "https://thisguycodez.github.io/data/e.jpeg", "alt": "me and kids 4", "desc": "Elite Futbol Camp! 4"}, {"id": 6,
"url": "https://thisguycodez.github.io/data/soc-f.jpg", "alt": "me and kids 5", "desc": "Elite Futbol Camp! 5"}, {"id":
7, "url": "https://thisguycodez.github.io/data/soc-h.jpeg", "alt": "me and kids 6", "desc": "Elite Futbol Camp! 6"},
{"id": 8, "url": "https://thisguycodez.github.io/data/soc-i.jpeg", "alt": "me and kids 7", "desc": "Elite Futbol Camp! 7"}, {"id": 9, "url": "https://thisguycodez.github.io/data/soc-j.jpeg", "alt": "me and kids 8", "desc": "Elite Futbol Camp! 8"}]






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




export const toggle_lango = (b) => dispatch  =>{
           dispatch({type:LANGO,payload:b})
          return  window.sessionStorage.setItem('lango',b)




         

}