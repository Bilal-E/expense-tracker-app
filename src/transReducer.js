const transacReducer = ((state, action) => {

    switch(action.type){

        case "ADD": { return [action.payload, ...state]; } 
        
        case "DEL": { return state.filter((item) => item.id !== action.payload.id); }

    default:

        return state;
        
        }    
})

export default transacReducer; 
