import React from 'react'

const Thankyou = () => {
    let address = localStorage.getItem("address")
    // Thankyou! You will be  receive your package shortly!!{address}

    setTimeout(()=>{
window.location.reload();
    },5000)
  return (
    <div className=''>
    <h3 className='text-center'>Thank You!!</h3>
    <hr />
    <p className='text-center'>Your Package will be devliver shortly at {address}</p>
    
    </div>
  )
}

export default Thankyou