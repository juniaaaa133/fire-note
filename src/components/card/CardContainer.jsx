import React from 'react'
import './index.css'

const CardContainer = ({children}) => {
  return (
    <div className="card-ctn">
        {children}
    </div>
  )
}

export default CardContainer