import React , { useState , useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const AddTransaction = () => {

    


    let [description,setDescription] = useState('');
    let [transactionAmount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const submit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit ={submit}>
                <div>
                    <label htmlFor="text">Description</label><br />
                    <TextField fullWidth="500px" id="outlined-name"  value={description} onChange={(e)=>setDescription(e.target.value)} variant="outlined"/>
                   
                </div>
                
                <div>
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label><br />
                    <TextField fullWidth="500px" id="outlined-name" type="number" value={transactionAmount} onChange={(e)=>setAmount(e.target.value)} variant="outlined"/>
                </div>
                <br />
                <button varient="contained" className="btn">Add transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction;
