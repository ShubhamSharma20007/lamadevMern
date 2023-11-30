import React from 'react'
import Context from './MyContext'

const MyState = (props) => {
    const [open, setOpen] = React.useState(false)
    
  return (
    <>

        <Context.Provider value={{open,setOpen}}>
            {props.children}
        </Context.Provider>

      
    </>
  )
}

export default MyState
