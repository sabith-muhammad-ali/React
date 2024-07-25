import React from 'react'

const Suhairqus = () => {
    const fruits = ['apple', 'bannana', 'orange', 'mango']
    const fruitsElement = []

    const veg = ['tomato','potatto','cucumber','zayid']

    for(let i = 0; i < fruits.length; i++){
        fruitsElement.push(<li key={i}>{fruits[i]}</li>)
    }
  return (
    <div>
        <h1>fruit list</h1>
        <ul>{fruitsElement}</ul>

        <ul>
            {veg.map((vegt, index) => 
                <li key={index}>{vegt}</li>
            )}
        </ul>
    </div>
  )
}

export default Suhairqus