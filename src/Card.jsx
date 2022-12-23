import React from 'react'

import './Card.scss'

export default function Card(props) {
  return (
   <div className='card'>
      <figure>
         <img src="https://picsum.photos/200" alt="" />
      </figure>
      <div className="info">
         <h4 className="heading"> {props.data.name} </h4>
         <h5 className="subheading">  {props.data.desc}     </h5>
      </div>
   </div>
  )
}
