import React from 'react'
import { createContext, useReducer } from 'react'
import transacReducer from './transReducer.js'

let initTrans = [];

const transacContext = createContext(initTrans);


export const TransProvider =({children}) => {

    let [state, dispatch] = useReducer(transacReducer, initTrans);

    function AddTrans(transObj){

        dispatch({

            type: "ADD",
            payload: {desc: transObj.desc,
                      amount: transObj.amount,
                      id: transObj.id},
        })}
    
    function DelTrans(transObj) {
      
        dispatch({
            type: "DEL",
            payload: {
                id: transObj.id
       }})}

    return(

        <transacContext.Provider value={{transactions: state, AddTrans, DelTrans}}>
            
            {children}

        </transacContext.Provider>
     )
} 

export default transacContext;