import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Tranaction } from './Transaction';

const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext);
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Tranaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
export default TransactionHistory;
