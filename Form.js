import React from 'react';
import { useState } from 'react';
import Button from "./Buttton";

function Form(props){
    const [name,setname]=useState('');
    
    function namehandler(e){
       setname(e.target.value);
    }
    const [price,setprice]=useState('');
    function pricehandler(e){
       setprice(e.target.value);
    }
    const obj={
        name:name,
        price:price
    }
    function submithandler(e){
        e.preventDefault();
        console.log(obj)
 props.onsave(obj);
    }
    
    return(
        <>
        <form onSubmit={submithandler} >
        <label>CandyName</label>
        <input onChange={namehandler}>
        </input>
        <label>Description</label>
        <input>
        </input>
        <label>Price</label>
        <input onChange={pricehandler}>
        </input>
        <Button ></Button>
        </form>
        </>
    )
}
export default Form;