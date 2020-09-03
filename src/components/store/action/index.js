import axios from 'axios'

export const signingIn=(userData)=>{

    console.log("The user data is ",userData);
return(dispatch)=>{
    axios
      .post(
        "http://localhost:1337/signup",
        {
          data: userData
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(result=>{
          console.log("The result is ",result)
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