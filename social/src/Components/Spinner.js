import React from 'react'
import spinner from '../spinner.svg'




const Spinner = () => {
  return (
    <div className='' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner