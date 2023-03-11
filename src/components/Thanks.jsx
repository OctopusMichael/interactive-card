import React from 'react'
import iconCheked from '../images/icon-complete.svg'

const Thanks = () => {

  const handleClick = () =>{
    location.reload()
  }
  return (
    <>
      <div className='container section-checked'>
        <img  src={iconCheked}/>
        <h1 className='mt-4'>Thank You!</h1>
        <h5>we've added your card details</h5>
        <button onClick={handleClick} className='btn '>Continue </button>
      
      </div>
    </>
  )
}

export default Thanks