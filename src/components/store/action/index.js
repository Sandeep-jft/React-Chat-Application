import axios from 'axios'

export const signingIn=(userData)=>{

    console.log("The user data is ",userData);

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
      })

    return {
        type:"SIGNING_IN",
        status:"SIGNING_IN"
    }
}