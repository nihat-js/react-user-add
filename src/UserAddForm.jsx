import React from 'react'

import './UserAddForm.scss'

export default function UserAddForm(props) {

   const inpName = React.useRef()
   const inpDesc = React.useRef()

   const handleForm = (e) => {
      e.preventDefault()
      props.setPeople ([
         ...props.people , {
            src : 'https://i.picsum.photos/id/53/200/200.jpg?hmac=NvXWlWpaKnDMb_phNyfwXppFuuNz0jK69wUnSFYQ6Ww',
            name : inpName.current.value,
            desc : inpDesc.current.value
         }
      ])
   }

  return (
   <form onKeyDown={ (e) => e.keyCode == 'Enter' && handleForm} onSubmit={handleForm}>
      <div className="form-group">
         <span> Name  </span>
         <input  ref={inpName} type="text" placeholder='First Name' />
      </div>
      <div className="form-group">
         <span> Description  </span>
         <input  ref={inpDesc}  type="text" placeholder='About you' />
      </div>
      <div className="action">
      <button> Add</button>
      </div>
   </form>
  )
}
