import React from "react";
import Product from "./Product";
function Show(props){
    console.log(props.list)
return(
    props.list.length>0?
    props.list.map((product,i)=>{
      return <Product product={product} key={i}></Product>;
    }):<h1>no product</h1>
)
}
export default Show;