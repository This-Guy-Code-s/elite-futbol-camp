import axios from 'axios'

//nav bar open an close toggle
//just toggles zindex to get away from
// the sub input interaction problem
export const NAV = 'NAV'


//language type query
export const LANGO = 'LANGO'

//language type query
export const SUBBED = 'SUBBED'
export const CLR_SUBBED = 'CLR_SUBBED'



//message board for a quick update on info with the company
// owners will be able to add content here from the admin app
export const MSG_BOARD = 'MSG_BOARD'
export const MSG_BOARD_BLOCKS = 'MSG_BOARD_BLOCKS'

//Contact type query
export const CONTACT_FORM_MSG = 'FORM_MSG'



//store keys
export const STORE_CATAGORY = 'STORE_CATAGORY'
export const STORE_GENDER = 'STORE_GENDER'
export const STORE_RENDER_NEW_LIST = 'STORE_RENDER_NEW_LIST'



// USING REACT_APP_API_TEST AT THE MOMENT OF BUILD




//changing the language of the application...english or spanish
export const toggle_lango = () => dispatch  =>{
    //keep track of boolean
    let bool;
    // check if 'useSpanish' exist
    //if it does then we are currently using spanish..switch to english and delete 'useSpanish' from sessionStorage
    if(window.sessionStorage.useSpanish){
      bool = false
      window.sessionStorage.removeItem('useSpanish')
    }
    //else....create 'useSpanish' in sessionStorage and switch to spanish
    else{
      bool = true
      window.sessionStorage.setItem('useSpanish','true')

    }
    //dispatch boolean to set redux store value
   return dispatch({type:LANGO,payload:bool})

}




//nav bar open an close toggle
//just toggles zindex to get away from
// the sub input interaction problem
export const nav_toggle = (state) => dispatch =>{
    return dispatch({type:NAV,payload:!state})
}





//when users are subscribing to the newsletter list
export const subscribing = (email) => dispatch =>{
//if we are in spanish or english
//return proper language msg back to app

let in_spanish = window.sessionStorage.useSpanish?true:false

  //valid email regexp
  const regi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  //is it a valid email?
  if(regi.test(email)){

    //if so then send email into server code to process
    return axios.post(`${process.env.REACT_APP_API_TEST}sub/user`,{email})
      .then((res)=>{
          // good response should be a thank you message
          console.log(res.data)

          if(res.data>0){

            if(in_spanish){
              return dispatch({type:SUBBED,payload:"Gracias! ha sido agregado al boletín."})
            }else{
              return dispatch({type:SUBBED,payload:"Thank You! you have been added to the newsletter."})
            }
         }

         else{
           if(in_spanish){
             return dispatch({type:SUBBED,payload:"Gracias! pronto se le añadirá al boletín."})
           }else{
             return dispatch({type:SUBBED,payload:"Thank You! you have been added to the newsletter."})
            }
         }
      })

      .catch((err)=>{
          //bad response should be server error or connection issue period
          console.log(err)
          if(in_spanish){
            return dispatch({type:SUBBED,payload:"Lo sentimos, por favor intente de nuevo más tarde..."})
          }else{
            return dispatch({type:SUBBED,payload:"Sorry please try again later..."})
          }
      })
  }

  //its not a valid email
  else{
    if(in_spanish){
            return dispatch({type:SUBBED,payload:"Ese no es un correo electrónico válido."})
          }else{
            return dispatch({type:SUBBED,payload:"That is not a valid email."})
          }
  }

}
//clearing the subscriber input an response msg content
export const clear_sub = () => dispatch =>{
return dispatch({type:CLR_SUBBED,payload:""})
}







//message board for a quick update on info with the company
// owners will be able to add content here from the admin app
export const toggle_msg_board = (state) => dispatch =>{
  return dispatch({type:MSG_BOARD,payload:!state})
}











//contact montiel via email...otherwise they can call
export const contact = (obj) => dispatch =>{
  //which language?
  let useSpanish = window.sessionStorage.useSpanish?true:false

   //valid email regexp
  const email_regi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //valid characters used
  const char = /[A-z]/
  //error states for each value in obj
  let msg_error,name_error,phone_error,email_error;

  //check for errors
  if(typeof obj.msg !== 'string' && char.test(obj.msg))phone_error=true
  else if(typeof obj.name !== 'string' && char.test(obj.name))phone_error=true
  else if(typeof obj.phone !== 'number')phone_error=true
  else if(email_regi.test(obj.phone))email_error=true

  //one at a time
  // if there is an error send standard
  // error msg back through redux store
  if(msg_error)dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'El mensaje debe tener al menos 10 caracteres.':'Message must be at least 10 characters long.'})
  else if(name_error)dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'Necesita usar al menos 3 letras para su nombre.':'Need to at least use 3 letters for your name.'})
  else if(phone_error)dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'Este no es un numero valido.':'This is not a valid number.'})
  else if(email_error)dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'Este no es un email valido.':'This is not a valid email.'})

    //send out mail through server...
    return axios.post(`${process.env.REACT_APP_API_TEST}contact`,obj)
          //error on smpt specifically
          .then((res)=>{
            console.log(res)
            if(!/sent/gi.test(res.data))dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'El servidor está funcionando, inténtelo de nuevo más tarde.':'Server is worked up, try again later.'})
              if(/sent/gi.test(res.data))dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'¡Gracias! El entrenador Montiel ha recibido tu carta.':'Thank you! Coach Montiel has recieved your letter.'})
          })

          //error on server end
          .catch((err)=>{
            console.log(err)
            dispatch({type:CONTACT_FORM_MSG,payload:useSpanish?'El servidor está funcionando, inténtelo de nuevo más tarde.':'Server is worked up, try again later.'})
          })
}











//sports store functionings

//catagory choice [clothes,shoes,protection,& misc]
export const choose_catagory = (catagory) => dispatch =>{
  window.sessionStorage.catagory = catagory.toLowerCase()
  return dispatch({type:STORE_CATAGORY,payload:catagory.toLowerCase()})
}

//gender choice [boys,girls,& all]
export const choose_gender = (gender) => dispatch =>{
  window.sessionStorage.gender = gender.toLowerCase()
  return dispatch({type:STORE_GENDER,payload:gender.toLowerCase()})
}

/* render the new filtered requested stock
list based on data pulled*/
export const render_new_list = (catagory,gender,stock) => dispatch =>{
  let useSpanish = window.sessionStorage.useSpanish?'spanish':'english'
  let list = stock[catagory][gender][useSpanish]


  return dispatch({type:STORE_RENDER_NEW_LIST,payload:list})
}
