const initialState = {
    status:"IDLE",
    user:null
}


export const signInReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SIGNING_IN":
            return{
                ...state,
                status:action.status
            }
            case "SUCCESS":
            return{
                ...state,
                user:action.data,
                status:"USER_CREATED"
            }
        default:
            return state
            
    }
}
