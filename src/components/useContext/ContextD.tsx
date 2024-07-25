import React, {useContext} from 'react'
import { UserContxt } from "./ContextA";

const ContextD = () => {
    const user = useContext(UserContxt)
  return (
    <div className='box'>
      <h1>ComponentD</h1>
      <h2>{`bye ${user}`}</h2>
      
    </div>
  )
}

export default ContextD
