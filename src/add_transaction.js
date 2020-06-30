import React, { useContext, useState } from 'react';
import transacContext from './transContext'


function AddTransaction() {

    let { transactions, AddTrans, DelTrans } = useContext(transacContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
    
        event.preventDefault()
        
            if (Number(newAmount) === 0) {        
                alert("Income/Expense cannot be 0");
            
            return false;
        }

        AddTrans({
        
            amount: Number(newAmount),
            desc: newDesc,
            id: transactions.length
        
        });

        setDesc('');    
        setAmount(0);
    }


     const getIncome = () => {

        let income = 0;

        for (var i = 0; i < transactions.length; i++) {

            if (transactions[i].amount > 0)
                income += transactions[i].amount;

            }

        return income;
    }


     const getExpense = () => {

        let expense = 0;

        for (var i = 0; i < transactions.length; i++) {

            if (transactions[i].amount < 0)
                expense += transactions[i].amount;

            }  
        
        return expense;
    }



    return (

        <>
        
        <header className="App-header center-align">
            EXPENSE TRACKER 
        </header>

        <h3 className="balance"> BALANCE: ${getIncome() + getExpense()} </h3>

        <div className="box1">
            <h3> INCOME: <br /> ${getIncome()} </h3>
            <h4> EXPENSE: <br /> ${getExpense()} </h4>
        </div>

        <div className="history-list">

                <h3> Transaction History </h3> <hr />  

            <ul className="history-list">
                
                {transactions.map((transObj, idx) => {
                    return (
                
                        <li key={idx}>
                            
                            <span>{transObj.desc}</span>

                            <span>${transObj.amount}</span>
                            
                            <button className="delete-btn" type="button" onClick={() => DelTrans({ id: transObj.id })}>x</button>
                        
                        </li>
                    );
                })}

            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className="trans" onSubmit={handleAddition} >

                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Enter Description"
                        onChange={(ev) => setDesc(ev.target.value)} required />
                </label>

                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Enter Amount"
                        onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />

                <input type="submit" value="Add Transaction" />

            </form>

        </div>
        </>

     );
}

export default AddTransaction; 