import React, { useContext } from 'react'
import  ComponentD  from './ContextD'
import {UserContxt} from "./ContextA"


const ContextC = () => {
    const user = useContext(UserContxt)
  return (
    <div className='box'>
      <h1>ComponentC</h1>
      <h2>{`reach in c ${user}`}</h2>
      <ComponentD />
    </div>
  )
}

export default ContextC
