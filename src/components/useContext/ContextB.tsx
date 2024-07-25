import React, { useContext } from 'react'
import ComponentC from './ContextC'
import { UserContxt } from "./ContextA";

const ContextB = () => {
    const user = useContext(UserContxt)
  return (
    <div className='box'>
      <h1>ComponentB</h1>
      <h2>{`stuck ${user}`}</h2>
      <ComponentC />
    </div>
  )
}

export default ContextB
