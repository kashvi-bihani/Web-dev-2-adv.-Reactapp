 import React, { useState } from 'react'
import ArtStyle from "../css/Article.module.css"


function Article() {
  const [count, setCount] = useState(0)
  const[Age,setAge]=useState(0)
  const[Name,setName]=useState(0)
    

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>Article</h2>
      <p>This is an article</p>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article

