import { useState } from 'react'
import Todo from './components/Todo';
import Update from './components/Update';


function App() {

  let div=22;

  if(div>100){
    div = <div>Hii</div>
  }
  else{
    div = <div>Welcome to React  </div>
  }
  
  return (
    <>
      <h1>{div} </h1>
      <Todo/>
      <Update/>
    </>
  )
}

export default App
