import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container-block'>
        <div className='container'>
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
