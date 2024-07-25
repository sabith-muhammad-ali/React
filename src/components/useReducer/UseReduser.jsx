import React, {useReducer} from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return{count: state.count +1}
        case "DEC":
            return{count: state.count - 1}    
        default:
            return state;
    }
}

const UseReduser = () => {
    const [state, dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
      Count:{state.count} 
      <button onClick={() => dispatch({type:"INC"})}>INCREMENT</button>
      <button onClick={() => dispatch({type:"DEC"})}>DECREMENT</button>
    </div>
  )
}

export default UseReduser
