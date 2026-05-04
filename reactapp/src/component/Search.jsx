import React,{useEffect, useState} from "react";

function Search(){
    const[search,setSearch]= useState('')
    useEffect(()=>{
        const getData=()=>{
            console.log("data has been fethed ")
        }
        const timer=setTimeout(getData,500)
        console.log(search)
        return()=>clearTimeout(timer)
    },[search])
    return(
        <div>
            <input type='test'placeholder='search'value={(search)on charge={(e)=>setSearch(e,EventTarget,value)}}/>

        </div>
    )

    
}
    