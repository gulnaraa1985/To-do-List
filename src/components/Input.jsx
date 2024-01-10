import React, { useReducer } from 'react'

const todoReducer=(state,action)=>{
  if(action.type==="NAME"){
    return {
      ...state,
      name: action.payload
    }
    }
    if(action.type==="EMAIL"){
      return {
        ...state,
        email: action.payload
      }
    }
    if(action.type==="PASSWORD"){
      return {
        ...state,
        password: action.payload
      }
    }
    return state
  }

const Input = (props) => {

  const[input,dispatchState]=useReducer(todoReducer,{
    name:"",
    email: "",
    password: ""
  })
  console.log(input);

  const inputName = (e)=>{
    dispatchState({type: "NAME", payload: e.target.value})
  }
  const inputEmail = (e)=>{
    dispatchState({type: "EMAIL", payload: e.target.value})
  }
  const inputPassword = (e)=>{
    dispatchState({type: "PASSWORD" , payload: e.target.value})
  }
  const clickHandler =()=>{
    props.onSave(input)
  }

  return (
    <div>
      <input onChange={inputName} type="name" />
      <input onChange={inputEmail} type="email" />
      <input onChange={inputPassword} type="password" />
      <button onClick={clickHandler}>CLICK</button>
      <h1>{props.onTodo}</h1>
    </div>
  )
}

export default Input

  

