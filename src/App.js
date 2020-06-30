import React from 'react';
import './App.css';
import AddTransaction from './add_transaction.js';
import { TransProvider } from './transContext'

function App() {
  
  return (
 
   <div className = "App-container">
      
      <TransProvider>
      
        <AddTransaction/>
        
      </TransProvider>
   
   </div>

  );
}

export default App;
