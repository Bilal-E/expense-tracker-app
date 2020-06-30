import React from 'react';
import './App.css';
import TransactionBody from './Body.js';
import { TransProvider } from './transContext'

function App() {
  
  return (

   <div className = "App-container">
      
      <TransProvider>
      
        <TransactionBody/>
        
      </TransProvider>
   
   </div>

  );
}

export default App;
