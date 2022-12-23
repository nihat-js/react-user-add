import React from 'react'

import './UserAddForm.scss'

export default function UserAddForm(props) {

   const inpName = React.useRef()
   const inpDesc = React.useRef()
   const inpPP = React.useRef()
   const handleForm = (e) => {
      e.preventDefault()
      const pp = URL.createObjectURL(inpPP.current.files[0]) 
      console.log(pp)
      props.setPeople ([
         ...props.people , {
            name : inpName.current.value,
            desc : inpDesc.current.value,
            pp :  pp
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
      <div className="upload">
         <input ref={inpPP} type="file"  id='file1'/>
         <p className="text"> Upload profile picture  </p>
         <label htmlFor="file1"> Upload  </label>
      </div>
      <div className="action">
      <button> Add</button>
      </div>
   </form>
  )
}
