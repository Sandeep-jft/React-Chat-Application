import axios from 'axios'
const BASE_URL="http://localhost:1337";

export const signingIn=(userData)=>{

    console.log("The user data is ",userData);
    return(dispatch)=>{
      axios.post(
        BASE_URL+"/signup",
        {
          data: userData
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(result=>{
         dispatch(signinsuccess(result.data.data))
      })
    }
    
}

 const signinsuccess=(data)=>{
    return{
      type:"SUCCESS",
      data:data
    }
}

export const userLogin=(userInfo)=>{
    return(dispatch)=>{
        axios.post(BASE_URL+"/Login",
        {
           email:userInfo.email,
           password:userInfo.password
        },
        {
        headers:{
            "Content-Type":"applicaton/json"
            }
         }
        ).then(response=>console.log("THe response is ",response))
    }
}