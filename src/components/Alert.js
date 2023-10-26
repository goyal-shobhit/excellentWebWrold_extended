import React, { useEffect, useState } from 'react'

const Alert = () => {
    const[componentMount,setComponentMount] = useState(false);

    useEffect (()=>{
        setComponentMount(true);
        setTimeout(()=>{
setComponentMount(false)
        },3000)
    },[componentMount])
  return (

    <div>
       <button>x</button>
        <div>Please Login First!!</div>
    </div>
  )
}

export default Alert