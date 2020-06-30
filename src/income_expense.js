import React from 'react'
import {getIncome, getExpense} from './add_transaction.js'

function IncomeExpense() {

    return (
      
        <div className = "box1">
             
            <h3> INCOME: <br/> ${ getIncome() } </h3>
            <h3> EXPENSE: <br /> ${ getExpense() } </h3>

        </div>
    );
}

export default IncomeExpense;