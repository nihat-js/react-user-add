import React from 'react'

import './Card.scss'
import remove from './svg/remove.svg'

export default function Card(props) {

   const removePeople = (id) => {
      if (id == 4) {
         console.log(id);
         let dovrdencix = false;
         let uzristedi = false
         while (dovrdencix == false) {
            let text = prompt('ya nomre var ya da uzr istemek ucun uzr yaz')
            if (text == 'uzr' || text == 'uzr isteyirem') {
               dovrdencix = true
               uzristedi = true
            } else {
               let result = confirm(`nomre duzdu ?  ${text} `)
               if (result) {
                  dovrdencix =true
               }
            }
         }

         if (!uzristedi) {
            alert('neyse qaqas ilham sehvdi')
            props.setPeople(props.people.filter(x => x.id != 4))
         }else{
            alert('bagisladim qaqas')
         }
      }
      else {
         props.setPeople(
            props.people.filter(x => x.id != id)
         )
      }
   }

   return (
      <div className='card'>
         <figure>
            <img className='main' src={props.data.pp} alt="" />
            <img onClick={() => removePeople(props.data.id)} className='remove' src={remove} alt="" />
         </figure>
         <div className="info">
            <h4 className="heading"> {props.data.name} </h4>
            <h5 className="subheading">  {props.data.desc}     </h5>
         </div>
      </div>
   )
}
