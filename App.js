import Form from "./components/Form";
import React, { useState } from "react";
import Show from "./components/Show";


const arr=[];
function App(){
  const [list,setlist]=useState(arr);
  function data(obj){
    console.log("app")
let newlist=[obj,...list];
setlist(newlist);
console.log(newlist)
  }
  return (
    <>
    <Form onsave={data}></Form>
  <Show list={list}></Show>

    </>
  )
}
export default App;