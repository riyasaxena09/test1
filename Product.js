import React, { createContext, useState } from 'react'
function Product(props){
    const [cartv,setcart]=useState(0);
    function change1(){
        setcart(cartv+1);
        console.log(cartv);
    }
    const Full=createContext();
  return(
    <>
    <Full.Provider value={"hy"}>
    <div className='row'>

<div className='col-4'>
<h2>{props.product.name} <span>{props.product.price}</span> 
<button onClick={change1}>Buy 1</button>
<button>Buy 2</button>
<button>Buy 3</button>
</h2>
</div>

</div>
  </Full.Provider>
  </>
    );
}
    export default Product;
  export { Full };