import React, { useState } from 'react'
import styled from 'styled-components';

const Todo = (props) => {
  const[name,setName]=useState([])
  const[email,setEmail]=useState("")
  console.log(name);
  console.log(email);

  const inputName = (e)=>{
    setName(e.target.value)
  }
  const inputEmail = (e)=>{
    setEmail(e.target.value)
  }
  const clickHandler = ()=>{
    const test={
      name,
      email
  }
  props.onTest(test)
  }

  const delHandler = ()=>{
  }
  return (
    <div>
            <h1>TO DO LIST</h1>

    <TodoStyled>
      <input onChange={inputName} type="text" />
      <input onChange={inputEmail} type="text" />
      <button onClick={clickHandler}>Click</button>
      <button onClick={delHandler}>delete</button>
    
    </TodoStyled>
    </div>
  )
}

export default Todo

const TodoStyled = styled.div`
  width: 260px;
  height: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: aqua;
  
`



