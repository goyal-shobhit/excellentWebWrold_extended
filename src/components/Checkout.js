import React, { useState } from 'react'
import { useNavigate} from "react-router-dom"

const Checkout = () => {
    const navigate = useNavigate();
    const[address,setAddress] = useState("");

const handleChange = (e)=>{
    localStorage.setItem ("address",e.target.value)
}

 const handleSubmit = ()=>{
    if(address===""){
        return false;
    }
else{
localStorage.setItem("address",address)
    navigate("/thankyou")
}
    }
  return (
    <div className='container px-3' >
        <div className="mt-3 py-3 form-floating">
        
<textarea className='form-control' id="address"value={address} onChange={(e)=>setAddress(e.target.value)} >

</textarea>
<label htmlFor='address'>Address</label>
</div>
<div className='d-flex align-item-center justify-content-center'>

<button className='btn btn-outline-dark'onClick={handleSubmit}  >Proceed to Checkout</button>
</div>
    </div>
  )
}

export default Checkout