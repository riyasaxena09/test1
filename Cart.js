import React from "react";
import { Cat } from "./components/Product";
function Cartoon(){
    return(
        <>
        <Cat.Consumer>
{(val)=>{
return(
    <button>Cart<span>{val}</span></button>
)
}}
        
            
        </Cat.Consumer>
        </>
    )
}
export default Cartoon;