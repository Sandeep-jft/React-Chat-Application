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
        default:
            return state
            
    }
}
