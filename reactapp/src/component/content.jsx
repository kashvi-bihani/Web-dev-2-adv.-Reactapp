import React from 'react'

function contact() {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit=()=>{
        event.preventDefault()
        if(!email.endsWith("krmu.edu.in")){
            alert("Please enter valid email")
            return
        }
        console.log(name)
        console.log(email)
        console.log(message)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea value={"message"} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button type="submit" className="bg-cyan-700 text-white"></button>
        </form>
    </div>
  )
}

export default contact


