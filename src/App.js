import React from 'react';
import './App.css';
import Header from './header.js';
import Income_expense from './income_expense.js';
import Balance from './balance.js';
import History  from './history.js';
import Add_transaction from './add_transaction.js';


function App() {
  
  return (

    <div className = "App-container">
      
      <Header />
      <Balance/>
      <Income_expense />
      <History />
      <Add_transaction />


    </div> 

  );
}

export default App;
