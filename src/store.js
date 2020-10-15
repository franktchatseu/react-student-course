import React, { useState } from 'react'

export const context = React.createContext();

const Store = ({children})=>{

    const [state, setState]= useState({name:"frank",email:"louenkamfrank@gmail.com"});

    return (
        <context.Provider value={[state,setState]}> {children} </context.Provider>
    )
}
export default Store;