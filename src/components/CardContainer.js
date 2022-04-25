import React from 'react'
import './CardContainer.css'

const CardContainer = (props) => {
  return (
    <div className='card-wrapper'>
        {
            props.filteredData.length ?
            props.filteredData.map((curElem)=>{
                return (
                    <div className="card">{curElem}</div>
                )
            })
            :
            (
              <>
            <div className='not-found'></div>
            <div className='not-found'>Data Not found</div>
            <div className='not-found'></div>
            </>
            )
        }
      
      
    </div>
  )
}

export default CardContainer
