
import React, { useState } from 'react'
import './App.scss'

import Card from './Card'
import UserAddForm from './UserAddForm'

export default function App() {
   const [people, setPeople] = React.useState([
      {
         name: 'Nihat',
         desc: 'JavaScript developer',
         pp: 'https://i.picsum.photos/id/146/200/200.jpg?hmac=BEfC1fMGgqn0zNUowEDrlnKsAisQSg9rYB7RxuXpTb4'
      },
      {
         name: 'Eltun',
         desc: 'Css developer',
         pp: 'https://i.picsum.photos/id/565/200/200.jpg?hmac=QvKo8qgzFFNcZoXCpT0CNMDTwWd3ynwqLXxrzK2o8fw'
      },
      {
         name: 'Yusif',
         desc: 'HTML developer',
         pp: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'
      },
      {
         name: 'Nicat',
         desc: 'Html2 developer',
         pp: 'https://i.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c'
      }
   ])

   return (
      <div>
         <div className="container">
            <h2 className='heading' > People </h2>
            <UserAddForm setPeople={setPeople}  people={people}></UserAddForm>
            <div className="row-card">
            {people.map((item,index)=> {
               return (
                  <Card key = {index} data={item} />

               )
            })}
            </div>    
         </div>
      </div>
   )
}
