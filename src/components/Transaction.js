import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Button } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export const Tranaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.transactionAmount < 0 ? '-' : '+';
    return (
        
            <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
                    {transaction.description}
                    <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
                    <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">
                        <Button variant="contained" color="primary"startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </button>
            </li>
        
    )
}